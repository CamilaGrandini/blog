---
title: Beauty Blog
layout: "index.njk"
---

<ul>
{% for post in collections.posts %}

<li class='item'>
<a href="{{ post.url }}">
{{ post.data.title }}
</a>
</li>
{% endfor %}
</ul>
