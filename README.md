<h1>The Holy Grail <sup>(kinda)</sup></h1>

<p>Simple clean layout made with HTML5 and CSS3</p>

<table>
    <thead>
        <tr>
            <th colspan="2"><h3>Features</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Float and calc()</th>
            <td>
                It is possible to make layouts without polluting you CSS with 100's of floats and calc()'s.<br />
                This layout uses calc() in combination with transform to center a loading icon and uses float to align buttons correctly next to each other and to fix a sub-pixel rendering problem for right sidebar.
            </td>
        </tr>
        <tr>
            <th>Dynamic heights</th>
            <td>The layout sections #left, #center and #right takes available height. If top or bottom section changes height, middle section just gets bigger or smaller, without any javascript involved.</td>
        </tr>
        <tr>
            <th>Dynamic widths</th>
            <td>The width for #left and #right can be individually set in for example: px, %, em.</td>
        </tr>
        <tr>
            <th>Grid</th>
            <td>Simple and powerful grid. cells in a grid row all expands based on the heightest cell.<br />
            h3 and p has overflow:auto to ensure that long words won't ruin the layout.</td>
        </tr>
        <tr>
            <th>Dynamic spacing</th>
            <td>Spacing can be added to #left, #center and #right by adding the class .padding on #middle. Use the button "Toggle padding" to see it in action.</td>
        </tr>
        <tr>
            <th>Minimal jQuery</th>
            <td>The layout uses jQuery to toggle different layout sections and to make advanced media queries for dynamic grids.</td>
        </tr>
        <tr>
            <th>Ellipsis headlines</th>
            <td>h2 has ellipsis effect on to ensure they stay on one line. It can easely be changed in CSS without causing any bugs for the layout.</td>
        </tr>
        <tr>
            <th>Initial states</th>
            <td>The layout sections #top, #bottom, #left and #right can be set to initial hidden by adding .hidden to them.</td>
        </tr>
        <tr>
            <th>Solid layout</th>
            <td>The layout will still work if you remove any or all of these layout sections: #top, #bottom, #left and #right.</td>
        </tr>
        <tr>
            <th>Full-width or centered layout</th>
            <td>By default the layout is full-width, but can be be centered with a max width by adding .center to #page</td>
        </tr>
        <tr>
            <th>No sub-pixel rendering problems</th>
            <td>Border and background-color is applied to the first child element in sidebars instead of the sidebars themselves to ensure that there won't be any sub-pixel rendering issues.</td>
        </tr>
        <tr>
            <th>JS media queries</th>
            <td>
                When the layout is smaller then a certain width, the sidebars will change from being next to center to being on top of it.<br />
                This is accomplished by adding or removing a class with JS.
            </td>
        </tr>
        <tr>
            <th>Cross-browser</th>
            <td>The layout looks the same in Chrome, Firefox and IE, other then the scrollbars.</td>
        </tr>
    </tbody>
</table>

<h2>Goals of the project</h2>
<p>Overcome some of the common problems I have had with making website layouts in the past, like the following:</p>
<ul>
<li>Making div's next to each other have same height based on heighest one.</li>
<li>Making div take up remaining browser window height / div container height</li>
<li>Making div take up remaining browser window width / div container width</li>
<li>Making completely dynamic grids that works and looks identical in all browser</li>
<li>Making a layout in a way so it doesn't care if you remove sections from it (except for main content section).</li>
<li>Making a layout that is not depending on JS to work (This layout only uses JS for advanced grid media queries and to toggle layout sections).</li>
<li>Making a layout that doesn't depend on float and calc() to work.</li>
</ul>

<h2>Screenshots</h2>
<p>In the screenshots below i have used 6 color-themes to style different parts of the content in different ways.<br />
If you don't want some or all of these color-themes, then just remove the import to it in layout.css</p>
<pre><code>
@import url('theme/blue.css');
@import url('theme/green.css');
@import url('theme/orange.css');
@import url('theme/purple.css');
@import url('theme/red.css');
@import url('theme/yellow.css');
</code></pre>

<img src="https://raw.githubusercontent.com/draxxdk/layout/master/img/screenshots/Image1.png" alt="" />
<img src="https://raw.githubusercontent.com/draxxdk/layout/master/img/screenshots/Image2.png" alt="" />
<img src="https://raw.githubusercontent.com/draxxdk/layout/master/img/screenshots/Image3.png" alt="" />
