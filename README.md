<h1>The Holy Grail <sup>(kinda)</sup></h1>

<p>Simple clean layout made with HTML5 and CSS3</p>

<table>
<thead>
<tr>
<th colspan="2">
Features
</th>
</tr>
</thead>
<tbody>
<tr>
                                                <th>Float and calc()</th>
                                                <td>
                                                    It is possible to make layouts without polluting you CSS with 100's of floats and calc()'s.<br />
                                                    This layout uses zero calc() and only 2 float.
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
                                                <td>Simple and powerful grid. cells in a grid row all expands based on the heightest cell.</td>
                                            </tr>
                                            <tr>
                                                <th>Minimal jQuery</th>
                                                <td>
                                                    The layout uses jQuery to toggle different layout sections and to make advanced media queries for dynamic grids.
                                                </td>
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
                                                <th>CSS media queries</th>
                                                <td>When the layout is smaller then a certain width, the sidebars will change from being next to center to being on top of it.</td>
                                            </tr>
                                            <tr>
                                                <th>Better box-shadow</th>
                                                <td>Instead of using regular box-shadow that rounds the shadows at corners, the sidebars uses gradients without rounded corners.</td>
                                            </tr>
                                            <tr>
                                                <th>Cross-browser</th>
                                                <td>The layout looks the same in Chrome, Firefox and IE, other then the scrollbars, that only looks nice in Chrome.</td>
                                            </tr>
</tbody>
</table>

<h2>Screenshots</h2>
<h3>All shown</h3>
<p>The grid with dynamic width has enough width here to be display all cells as cells instead of rows.</p>
<img src="https://raw.githubusercontent.com/draxxdk/layout/master/img/screenshot/Image1.jpg" alt="All shown" />
<h3>Media queries</h3>
<p>A CSS media query puts sidebars on top of center instead of next to it, when the window width gets small</p>
<img src="https://raw.githubusercontent.com/draxxdk/layout/master/img/screenshot/Image2.jpg" alt="Media query putting sidebars on top of center instead of besides it" />
<h3>Right sidebar and footer hidden</h3>
<p>The grid with dynamic width does not have enough room to display the cells with 33% width as cells, so it makes them into rows instead.</p>
<img src="https://raw.githubusercontent.com/draxxdk/layout/master/img/screenshot/Image3.jpg" alt="Right sidebar and footer hidden" />
<h3>Center shown</h3>
<p>The layout can change from showing everything to only showing #center by clicking on the button that are in the top right corner of #center</p>
<img src="https://raw.githubusercontent.com/draxxdk/layout/master/img/screenshot/Image4.jpg" alt="Center shown" />
