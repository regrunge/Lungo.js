/**
 * Initialize the <articles> layout of a certain <section>
 *
 * @namespace LUNGO.View
 * @class Article
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 * @author Guillermo Pascual <pasku@tapquo.com> || @pasku1
 */

LUNGO.View.Article = (function(lng, undefined) {

    var SELECTORS = {
        ARTICLE: 'article',
        NAVIGATION_ITEM: 'a',
        REFERENCE_LINK: 'a[href][data-article]'
    };

    var CSS_CLASSES = {
        ACTIVE: 'current'
    };

    /**
     * ?
     *
     * @method show
     */
    var show = function(section_id, article_id) {
        var nav_items = section_id + ' ' + SELECTORS.NAVIGATION_ITEM;
        _disableNavItems(nav_items);

        var current_nav_item = lng.dom(nav_items + '[href="' + article_id + '"]');
        current_nav_item.addClass(CSS_CLASSES.ACTIVE);
        _setTitle(section_id, current_nav_item);

        showReferenceLinks(section_id, article_id.replace('#', ''));

        _showContainer(section_id, article_id);
    };

    /**
     * ?
     *
     * @method showReferenceLinks
     */
    var showReferenceLinks = function(section_id, article_id) {
        var links = lng.dom('section' + section_id + ' ' + SELECTORS.REFERENCE_LINK);

        for (var i = 0, len = links.length; i < len; i++) {
            var link = lng.dom(links[i]);
            (link.data('article') === article_id) ? link.show() : link.hide();
        }
    };

    var _disableNavItems = function(items) {
        lng.dom(items).removeClass(CSS_CLASSES.ACTIVE);
    };

    var _showContainer = function(section_id, article_id) {
        var section_articles = section_id + ' ' + SELECTORS.ARTICLE;
        lng.dom(section_articles).removeClass(CSS_CLASSES.ACTIVE);
        lng.dom(article_id).addClass(CSS_CLASSES.ACTIVE);
    };

    var _setTitle = function(id, item) {
        var title = item.data('title');

        if (title) {
            var section_title = id + ' header .title, ' + id + ' footer .title';
            lng.dom(section_title).text(title);
        }
    };

    return {
        show: show,
        showReferenceLinks: showReferenceLinks
    };

})(LUNGO);