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

## creating new embed types

custom-elements gives us the ability to create new html elements,
and therefore ways to create new embeds. You could
have `markdown` `csv` or `code`. These would have parameters
that effect how that embed is displayed (analogous to linking
to a video with at a specific time) you could set the language
(for syntax highlighting) on `code` elements,
which paragraph or heading you want to embed in `markdown`
or which how to calculate a total on a csv.

## License

MIT

