/*jslint indent: 4 */
/*global $ */

(function () {
    'use strict';
    var $navbarLinks = $('div#bs-navbar-collapse ul'),
        $linkTemp = $('li', $navbarLinks);

    $linkTemp.remove();

    [
        ['/sample', 'sample'],
        ['/mbs', 'makeBookSupporter'],
    ].forEach(function (linkInfo) {
        var $link = $linkTemp.clone(),
            $a = $('a', $link);

        $a.text(linkInfo[1]);
        $a.attr('href', linkInfo[0]);
        $navbarLinks.append($link);
        $link.show();
    });

}());

