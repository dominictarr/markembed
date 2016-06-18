# markembed

markdown but supporting arbitary embeds.

## syntax

Although it is easy to invent new markdown syntax,
I didn't want to do that. This is still compatible
with a standard markdown parser.
Instead, I extended markdown by analogy.

markdown only supports one type of embedded content:
images. an image is represented as a link syntax, but
with a preceding `!`. `![alt-text](href "title")`
I didn't even know there was a field on images
(or links) called title. But both [links](http://daringfireball.net/projects/markdown/syntax#link)
and [images](http://daringfireball.net/projects/markdown/syntax#image)
have title fields.

As described at [w3c link spec](https://www.w3.org/TR/html401/struct/links.html#h-12.1.4)
title is mainly used to create tool tips or for screen readers.
We'd need to ensure that accessability still exists, but maybe
we can put something in here?

here is my proposed syntax:

`![alt-text](href "tag-name?foo=bar")`
as an embed it would become a tag as
`<tag-name foo="bar" src="href" alt="alt-text"/>`
(the query is expanded to be attributes, as with all embedding
elements href becomes `src`, link-text becomes alt-text)

Using the title field means that markdown renderers that do not
support `markembed` will simply show the embeds as links,
which may still be useful.

## embed types built into html

* image
* audio
* video
* iframe
* embed (flash)

I've left out `<script>` and `<link>` because they do not
directly create an html element visible on the screen.

Embedded types should be visible and interactive via some
known interface.

## creating new embed types

custom-elements gives us the ability to create new html elements,
and therefore ways to create new embeds. 

You could have `markdown` `csv` or `code`.
These would have parameters that effect how that embed is displayed
 (analogous to linking to a video with at a specific time)
custom-elements _must_ have a `-` in the name, following
the convention for headers, if a multiple word name is not
necessary, an x- prefix is used.

some ideas:

* x-code: code with systax highlighting by language and line ranges.
* x-markdown: embed markdown in markdown, highlight or a selection (via query selector?)
* x-cvs: more convienent than a table. allow users to sort columns, etc.
* x-gnuplot: generate a graph... possibly from a csv?
  use [gnuplot.js](http://gnuplot.respawned.com/) (hmm, that is 3mb of js)
* ssb-message: embed another message (like a retweet) could partially quote as with markdown.
* ssb-query: query the ssb database and output results from your own perspective.

Students of computer history will realize that this would constitute
[transclusion](https://en.wikipedia.org/wiki/Transclusion)

## test embed markdown

test:

![embedded markdown](./x-markdown.md "x-markdown")

![embedded audio](./roverhomie.ogg "audio?controls=true")

## accessibility

The markdown is a little more awkward, but you can still set
the `title` attribute by using querystring syntax.
`![some picture](url "?title=this is the title")`

OR, have a allow/deny list passed into markembed,
and take any thing that would not be on that to be a embed link.

I have tested ssb logs to find out how many actual links
use the title field, that are not exactly the same as the label.
So far 61/6082 links have title fields set. that is 1.002%

To prevent ambiguity, `markembed` parses the title field
and only treats titles that could work as embeds as embeds.

That is, `image` `audio` `image` (`iframe` and `embed` constitute security risks)
and custom elements which must be lower case or numbers and _must_ include at least one `-`.

[TODO: parse _all_ valid custom element names](https://www.w3.org/TR/custom-elements/#valid-custom-element-name)

## links (not embedded)

links should still open that content in a separate window/tab.
Since the raw content linked to might not present correctly
in a web browser (except for native types) maybe you'd have
the app contain a route to create a page with only that element in it.
If an element is aware of this, it may have settings to expand, etc
or to display full size.

Since an app needs to load all the custom elements that it supports,
it could set it's own config for how they might display
when embedded or natural.

## License

MIT


