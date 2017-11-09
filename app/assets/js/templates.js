angular.module('ReferYogi').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
    "\n" +
    "<update-title title=\"Home Page\"></update-title>\n" +
    "<update-meta name=\"description\" content=\"Site Data\"></update-meta>\n" +
    "<update-title title=\"Home Page\">\n" +
    "</update-title>\n" +
    "<update-meta content=\"Site Data\" name=\"description\">\n" +
    "</update-meta>\n" +
    "<div class=\"col-md-4 col-sm-6\" ng-repeat=\"offer in vm.offers track by $index \">\n" +
    "    <div class=\"offer-container\">\n" +
    "        <a>\n" +
    "            <img alt=\"offer-image\" ng-click=\"vm.getSlidepopup(offer.attributes.campaign_id)\" ng-src=\"{{offer.attributes.avatar_thumb}}\">\n" +
    "            </img>\n" +
    "        </a>\n" +
    "        <div class=\"offer-details\">\n" +
    "            <span class=\"grisp\" ng-click=\"vm.getSlidepopup(offer.attributes.campaign_id)\">\n" +
    "                <button ng-click=\"vm.getSlidepopup(offer.attributes.campaign_id)\">\n" +
    "                    GET CODE!\n" +
    "                </button>\n" +
    "                <h3>\n" +
    "                    {{offer.attributes.name | limitTo:27}}\n" +
    "\n" +
    "                                {{offer.attributes.name.length > 27 ? '...' : ''}}\n" +
    "                </h3>\n" +
    "                <div class=\"offer-location\">\n" +
    "                    <b>\n" +
    "                        At -\n" +
    "\n" +
    "\n" +
    "          {{offer.attributes.business_name | limitTo:18}}\n" +
    "\n" +
    "                                {{offer.attributes.business_name.length > 18 ? '...' : ''}}\n" +
    "                    </b>\n" +
    "                    <span>\n" +
    "                        {{offer.attributes.place | limitTo:10}}\n" +
    "\n" +
    "                                {{offer.attributes.place.length > 10 ? '...' : ''}}\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <!-- <p>{{offer.attributes.caption | limitTo: 140}} {{offer.attributes.caption.length > 140 ? '...' : ''}}</p> -->\n" +
    "            </span>\n" +
    "            <div class=\"offer-share\" style=\"    margin: 0px;\n" +
    "    padding: 0px;\n" +
    "    padding-top: 10px;\">\n" +
    "                <label>\n" +
    "                    REFER & EARN\n" +
    "                </label>\n" +
    "                <ul ng-show=\" vm.isReferral()\">\n" +
    "                    <li class=\"offer-share-max\">\n" +
    "                        <a data-clipboard-text=\"{{vm.OfferLink(offer.attributes.seo_url,offer.attributes.tracking_code.general)}}\" data-placement=\"bottom\" ngclipboard=\"\" ngclipboard-success=\"vm.onCopySuccess(e);\" onmouseenter=\"$(this).tooltip('show')\" title=\"Copy link\">\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"offer-share-fb\">\n" +
    "                        <a ng-click=\"vm.SocialShareUpdate(offer.attributes.seo_url,'facebook')\" socialshare=\"\" socialshare-provider=\"facebook\" socialshare-url=\"{{vm.OfferLink(offer.attributes.seo_url,offer.attributes.tracking_code.facebook)}}\">\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"offer-share-twitter\">\n" +
    "                        <a href=\"whatsapp://send?text={{vm.SeoHelpSocialShare(offer.id,'copy')}}\">\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"offer-share-twitter hidden-md hidden-lg\" style=\"background: url(share-whatsapp.png) no-repeat;\n" +
    "    background-size: contain;\">\n" +
    "                        <a socialshare=\"\" socialshare-provider=\"whatsapp\" socialshare-text=\"{{offer.attributes.caption}}\" socialshare-url=\"{{vm.OfferLink(offer.attributes.seo_url,offer.attributes.tracking_code.general)}}\" style=\"    background: none;\">\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <ul ng-click=\"vm.signupPOP('referral')\" ng-hide=\" vm.isReferral()\">\n" +
    "                    <li class=\"offer-share-max\">\n" +
    "                        <a data-placement=\"bottom\" onmouseenter=\"$(this).tooltip('show')\" title=\"Copy link\">\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"offer-share-fb\">\n" +
    "                        <a>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"offer-share-twitter\">\n" +
    "                        <a>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"offer-spini-treashure\">\n" +
    "            <a class=\"hoverable\" href=\"javascript://\">\n" +
    "                <span class=\"normal\">\n" +
    "                    <i class=\"fa fa-gift link-icon fagift\">\n" +
    "                    </i>\n" +
    "                    MY TREASURE\n" +
    "                </span>\n" +
    "                <span class=\"hover\" ng-show=\" {{offer.attributes.treasure_value}}\">\n" +
    "                    <i class=\"fa fa-gift link-icon fagift\">\n" +
    "                    </i>\n" +
    "                    Refer & Earn Upto ₹{{offer.attributes.treasure_value}}!\n" +
    "                </span>\n" +
    "                <span class=\"hover\" ng-click=\"vm.signupPOP()\" ng-hide=\" {{offer.attributes.treasure_value}}\">\n" +
    "                    <i class=\"fa fa-gift link-icon fagift\">\n" +
    "                    </i>\n" +
    "                    Become a Yogi to earn the Treasure !\n" +
    "                </span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar-tpl.html',
    "<nav class=\"navbar navbar-inverse\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "			</button>\n" +
    "			<a class=\"navbar-brand\" href=\"/#!/\">{{ brand }}</a>\n" +
    "		</div>\n" +
    "		<div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "			<ul class=\"nav navbar-nav\">\n" +
    "				<li ng-repeat=\"item in menus\" ng-class=\"{active:isActive('#/' + item.link)}\">\n" +
    "					<a ui-sref=\"{{ item.link }}\">{{ item.name }}</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div><!--/.nav-collapse -->\n" +
    "	</div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<div ng-controller=\"NavBarCtrl as vm\">\n" +
    "    <nav-bar menus=\"vm.menu\" brand=\"vm.title\"></nav-bar>\n" +
    "</div>\n"
  );

}]);
