angular.module('ReferYogi').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/category.html',
    "<nav class=\"navbar main-header-navigation\">\n" +
    "    <div class=\"container-fluid nopad\">\n" +
    "        <div class=\"collapse navbar-collapse\" i=\"\">\n" +
    "            <ul class=\"text-center\">\n" +
    "                <li>\n" +
    "                    <a>\n" +
    "                        All\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li class=\"dropdown\">\n" +
    "                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "                        <span class=\"caret\">\n" +
    "                        </span>\n" +
    "                    </a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li>\n" +
    "                            <a>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "\n" +
    "<update-title title=\"Home Page\"></update-title>\n" +
    "<update-meta name=\"description\" content=\"Site Data\"></update-meta>\n" +
    "<update-title title=\"Home Page\">\n" +
    "</update-title>\n" +
    "<update-meta content=\"Site Data\" name=\"description\">\n" +
    "</update-meta>\n" +
    "\n" +
    "        <div class=\"col-md-4 col-sm-6\" ng-repeat=\"offer in vm.offers track by $index \">\n" +
    "            <div class=\"offer-container\">\n" +
    "                <a>\n" +
    "                  <img alt=\"offer-image\" ng-click=\"vm.getSlidepopup(offer.attributes.campaign_id)\" ng-src=\"{{offer.attributes.avatar_thumb}}\">\n" +
    "                </a>\n" +
    "                    <div class=\"offer-details\">\n" +
    "                        <span class=\"grisp\" ng-click=\"vm.getSlidepopup(offer.attributes.campaign_id)\">\n" +
    "                            <button ng-click=\"vm.getSlidepopup(offer.attributes.campaign_id)\">\n" +
    "                                GET CODE!\n" +
    "                            </button>\n" +
    "                            <h3>\n" +
    "                                {{offer.attributes.name | limitTo:27}}\n" +
    "\n" +
    "                                {{offer.attributes.name.length > 27 ? '...' : ''}}\n" +
    "\n" +
    "                            </h3>\n" +
    "                            <div class=\"offer-location\">\n" +
    "                                <b>\n" +
    "                                    At -\n" +
    "\n" +
    "\n" +
    "          {{offer.attributes.business_name | limitTo:18}}\n" +
    "\n" +
    "                                {{offer.attributes.business_name.length > 18 ? '...' : ''}}\n" +
    "\n" +
    "\n" +
    "                                </b>\n" +
    "                                <span>\n" +
    "\n" +
    "                                  {{offer.attributes.place | limitTo:10}}\n" +
    "\n" +
    "                                {{offer.attributes.place.length > 10 ? '...' : ''}}\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <!-- <p>{{offer.attributes.caption | limitTo: 140}} {{offer.attributes.caption.length > 140 ? '...' : ''}}</p> -->\n" +
    "\n" +
    "                        </span>\n" +
    "                        <div class=\"offer-share\" style=\"    margin: 0px;\n" +
    "    padding: 0px;\n" +
    "    padding-top: 10px;\">\n" +
    "                            <label>\n" +
    "                                REFER & EARN\n" +
    "                            </label>\n" +
    "                            <ul ng-show=\" vm.isReferral()\">\n" +
    "                                <li class=\"offer-share-max\">\n" +
    "                                    <a data-clipboard-text=\"{{vm.OfferLink(offer.attributes.seo_url,offer.attributes.tracking_code.general)}}\" ngclipboard=\"\" ngclipboard-success=\"vm.onCopySuccess(e);\" data-placement=\"bottom\" title=\"Copy link\" onmouseenter=\"$(this).tooltip('show')\">\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                                <li class=\"offer-share-fb\">\n" +
    "                                    <a ng-click=\"vm.SocialShareUpdate(offer.attributes.seo_url,'facebook')\" socialshare=\"\" socialshare-provider=\"facebook\" socialshare-url=\"{{vm.OfferLink(offer.attributes.seo_url,offer.attributes.tracking_code.facebook)}}\">\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                                <li class=\"offer-share-twitter\">\n" +
    "                                    <a\n" +
    "\n" +
    "                                     href=\"whatsapp://send?text={{vm.SeoHelpSocialShare(offer.id,'copy')}}\"\n" +
    ">\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "\n" +
    "                                <li class=\"offer-share-twitter hidden-md hidden-lg\"  style=\"background: url(share-whatsapp.png) no-repeat;\n" +
    "    background-size: contain;\"  >\n" +
    "                                    <a\n" +
    "\n" +
    "style=\"    background: none;\"\n" +
    "                                    socialshare=\"\" socialshare-provider=\"whatsapp\"\n" +
    "\n" +
    "                                    socialshare-text=\"{{offer.attributes.caption}}\"\n" +
    "\n" +
    "                                    socialshare-url=\"{{vm.OfferLink(offer.attributes.seo_url,offer.attributes.tracking_code.general)}}\">\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                            <ul ng-click=\"vm.signupPOP('referral')\" ng-hide=\" vm.isReferral()\">\n" +
    "\n" +
    "                                <li class=\"offer-share-max\">\n" +
    "                                    <a data-placement=\"bottom\" title=\"Copy link\" onmouseenter=\"$(this).tooltip('show')\">\n" +
    "\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                                <li class=\"offer-share-fb\">\n" +
    "                                    <a>\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                                <li class=\"offer-share-twitter\">\n" +
    "                                    <a>\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"offer-spini-treashure\">\n" +
    "                        <a class=\"hoverable\" href=\"javascript://\">\n" +
    "                            <span class=\"normal\">\n" +
    "                                <i class=\"fa fa-gift link-icon fagift\">\n" +
    "                                </i>\n" +
    "                                MY TREASURE\n" +
    "                            </span>\n" +
    "                            <span class=\"hover\" ng-show=\" {{offer.attributes.treasure_value}}\">\n" +
    "                                <i class=\"fa fa-gift link-icon fagift\">\n" +
    "                                </i>\n" +
    "                                Refer & Earn Upto ₹{{offer.attributes.treasure_value}}!\n" +
    "                            </span>\n" +
    "                            <span class=\"hover\" ng-hide=\" {{offer.attributes.treasure_value}}\" ng-click=\"vm.signupPOP()\">\n" +
    "                                <i class=\"fa fa-gift link-icon fagift\">\n" +
    "                                </i>\n" +
    "\n" +
    "                              Become a Yogi to earn the Treasure !\n" +
    "\n" +
    "                            </span>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    " </div>\n" +
    "\n" +
    "<p id=\"next_page\" style=\"display: none\">\n" +
    "</p>\n"
  );


  $templateCache.put('app/modules/home/locations.html',
    "<div class=\"col-md-2 col-xs-12 col-sm-12 main-header-location hidden-lg\" style=\"text-align: center;\">\n" +
    "    <i class=\"glyphicon glyphicon-map-marker\">\n" +
    "    </i>\n" +
    "    <div class=\"dropdown\">\n" +
    "        <span class=\"dropdown-toggle\" type=\"button\">\n" +
    "        </span>\n" +
    "        <span class=\"caret\">\n" +
    "        </span>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/slider.html',
    "<!-- slider code -->\n" +
    "<section class=\"main-slider\" ng-show=\"vm.slider\" style=\"    margin-bottom: -8px;\">\n" +
    "  <div class=\"container\">\n" +
    "    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "      <!-- Indicators -->\n" +
    "      <ol class=\"carousel-indicators\">\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "      </ol>\n" +
    "\n" +
    "      <!-- Wrapper for slides -->\n" +
    "      <div class=\"carousel-inner\">\n" +
    "\n" +
    "        <div class=\"item active\" ng-click=\"vm.getSlidepopup(1,false,1)\">\n" +
    "\n" +
    "          <img ng-src=\"/app/assets/images/03Banner/cream_fudge.png\" alt=\"Los Angeles\" style=\"width:100%;max-height: 350px\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"item\">\n" +
    "          <img ng-src=\"/app/assets/images/03Banner/naturals.png\" alt=\"Chicago\" style=\"width:100%;max-height: 350px\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"item\">\n" +
    "          <img ng-src=\"/app/assets/images/03Banner/ak.png\" alt=\"New York\" style=\"width:100%;max-height: 350px\">\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Left and right controls -->\n" +
    "      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\" ng-non-bindable >\n" +
    "        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "        <span class=\"sr-only\">Previous</span>\n" +
    "      </a>\n" +
    "      <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\" ng-non-bindable >\n" +
    "        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "        <span class=\"sr-only\">Next</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"how-spini-works\" ng-show=\"vm.how_works\" >\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "  <h3 class=\"text-center\"  style=\"\n" +
    "      font-size: 35px;\n" +
    "    font-family: HelveticaNeueLight;\n" +
    "    font-weight: 700;\n" +
    "    letter-spacing: 5px;\n" +
    "    color: #bbbbbb;\">How  ReferYogi Works </h3>\n" +
    "\n" +
    "\n" +
    "  <div class=\"col-sm-12\" style=\"    margin-top: 50px\">\n" +
    "  <div class=\"col-sm-4 cls4 nopad\">\n" +
    "    <img  class=\"img-responsive\" style=\"float: left;\" src=\"/app/assets/images/01-Signup-Img.png\">\n" +
    "\n" +
    "    <span style=\"\n" +
    "    margin-top: 26px;\n" +
    "    display: inline-block;\n" +
    "    margin-left: 10px;\">\n" +
    "    <b style=\"color: #e83634;\">\n" +
    "      Sign Up\n" +
    "    </b>\n" +
    "    <br>\n" +
    "   <span>\n" +
    "      with you Facebook<br>\n" +
    "      Account\n" +
    "    </span>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4 cls4 nopad\">\n" +
    "     <img class=\"img-responsive\"  style=\"float: left;\" src=\"/app/assets/images/02-Avail-Img.png\">\n" +
    "\n" +
    "\n" +
    "    <span style=\"\n" +
    "    margin-top: 26px;\n" +
    "    display: inline-block;\n" +
    "    margin-left: 10px;\">\n" +
    "    <b style=\"color: #e83634;\">\n" +
    "      Avail Offers\n" +
    "    </b>\n" +
    "    <br>\n" +
    "   <span>\n" +
    "      you like and enjoy<br>\n" +
    "      ReferYogi treasure\n" +
    "    </span>\n" +
    "    </span>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "   <div class=\"col-sm-4 cls4 nopad\">\n" +
    "     <img class=\"img-responsive\"  style=\"float: left;\" src=\"/app/assets/images/03-Cash-Img.png\">\n" +
    "\n" +
    "\n" +
    "    <span style=\"\n" +
    "    margin-top: 26px;\n" +
    "    display: inline-block;\n" +
    "    margin-left: 10px;\">\n" +
    "    <b style=\"color: #e83634;\">\n" +
    "      Get CASH in your wallet\n" +
    "    </b>\n" +
    "    <br>\n" +
    "   <span>\n" +
    "     every time your shared <br>\n" +
    "      code is redeemed\n" +
    "    </span>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "</section>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar-tpl.html',
    "<!-- <nav class=\"navbar navbar-inverse\">\n" +
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
    "</nav>\n" +
    " -->\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<header ng-controller=\"HomeCtrl as vm\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"row hidden-sm hidden-xs\">\n" +
    "            <div class=\"col-md-12 text-right\" style=\"padding: 5px 0\">\n" +
    "                <ul class=\"home-top-header\">\n" +
    "                    <li ng-hide=\"vm.isVendor()\">\n" +
    "                        <a href=\"#\" ng-click=\"vm.VendorContactUs();\" style=\"color: #e83634\">\n" +
    "                            Become Our Partner\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"tel:8148303123\">\n" +
    "                            <i aria-hidden=\"true\" class=\"fa fa-phone\">\n" +
    "                            </i>\n" +
    "                            + 91 44-4211 5442\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li ng-show=\"vm.isReferral()\">\n" +
    "                        <a href=\"#\">\n" +
    "                            Welcome {{vm.user.name}} !\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <!-- <li ng-hide=\"vm.isReferral()\">\n" +
    "            <a href=\"#\" ng-click=\"vm.openLoginPopup('referral')\">Login</a>\n" +
    "          </li>\n" +
    "          <li ng-hide=\"vm.isReferral()\">\n" +
    "            <a href=\"#\" ng-click=\"vm.signupPOP('referral')\">Signup</a>\n" +
    "          </li> -->\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <hr>\n" +
    "            </hr>\n" +
    "        </div>\n" +
    "        <div class=\"row main-header\">\n" +
    "            <div class=\"col-md-12 nopad\">\n" +
    "                <div class=\"hidden-md hidden-lg col-sm-3 col-xs-3 nopad\">\n" +
    "                    <div style=\"margin-top: -7px;\">\n" +
    "                        <button class=\"navbar-toggle fshow\" data-target=\"#myNavbar\" data-toggle=\"collapse\" type=\"button\">\n" +
    "                            <span class=\"icon-bar\">\n" +
    "                            </span>\n" +
    "                            <span class=\"icon-bar\">\n" +
    "                            </span>\n" +
    "                            <span class=\"icon-bar\">\n" +
    "                            </span>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2 col-xs-6 col-sm-6 text-center main-header-logo\">\n" +
    "                    <a href=\"/\" ng-click=\"vm.refresh()\">\n" +
    "                        <img alt=\"ReferYogi logo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "                        </img>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"hidden-md hidden-lg col-sm-3 col-xs-3 \">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-12 nopad\">\n" +
    "                            <div class=\"col-xs-6 nopad\">\n" +
    "                                <button class=\"bton-ser\" ng-click=\"vm.MobileToggleSearch()\">\n" +
    "                                    <i class=\"fa fa-search\">\n" +
    "                                    </i>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 nopad\">\n" +
    "                                <button class=\"bton-ser\" ng-click=\"vm.MobileLogin()\">\n" +
    "                                    <i class=\"fa fa-user\">\n" +
    "                                    </i>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"main-header-search hidden-md hidden-lg \" id=\"mobileSearch\" style=\"display: none;\">\n" +
    "                    <input class=\"search_n\" ng-enter=\"vm.searchBox(vm.search_txt)\" ng-model=\"vm.search_txt\" placeholder=\"Search Offers\" type=\"text\">\n" +
    "                        <button class=\"search_n\" ng-click=\"vm.searchBox(vm.search_txt)\">\n" +
    "                        </button>\n" +
    "                    </input>\n" +
    "                </div>\n" +
    "                <div class=\"hidden-md hidden-lg \" id=\"mobileMenu\" style=\"display: none;\">\n" +
    "                    <span>\n" +
    "                        <div class=\"col-xs-12\" ng-show=\"vm.isReferral()\" style=\"    padding-top: 20px;\">\n" +
    "                            <b style=\"color:#ec5d6e\">\n" +
    "                                Your Account\n" +
    "                            </b>\n" +
    "                            <br>\n" +
    "                                <p>\n" +
    "                                    Access Account & Manage offers\n" +
    "                                </p>\n" +
    "                                <br>\n" +
    "                                    <div class=\"col-xs-6\">\n" +
    "                                        <button ng-click=\"vm.goProfile()\" style=\"    float: left; width: 100%;background-image: none;\">\n" +
    "                                            Profile\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-xs-6\">\n" +
    "                                        <button ng-click=\"vm.Logout()\" style=\"\n" +
    "                        float: left; width: 100%; background-image: none;\">\n" +
    "                                            Logout\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </br>\n" +
    "                            </br>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 text-center\" ng-hide=\"vm.isVendor() || vm.isReferral()\" style=\"    padding-top: 20px;\">\n" +
    "                            <b style=\"color: #ec5d6e\">\n" +
    "                                ReferYogi\n" +
    "                            </b>\n" +
    "                            <br>\n" +
    "                                <p>\n" +
    "                                    Access & Become a Yogi!\n" +
    "                                </p>\n" +
    "                                <br>\n" +
    "                                    <div class=\"col-xs-6\">\n" +
    "                                        <button ng-click=\"vm.signupPOP('referral')\" style=\"    float: left; width: 100%; background-image: none;\">\n" +
    "                                            SignUp\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-xs-6\">\n" +
    "                                        <button ng-click=\"vm.openLoginPopup('referral')\" style=\"float: left; width: 100%; background-image: none;\">\n" +
    "                                            Login\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-12 col-xs-12 \" style=\"    padding-top: 30px;\">\n" +
    "                                        <button ng-click=\"vm.VendorContactUs();\" style=\"float: left; width: 100%; background-image: none;\">\n" +
    "                                            Become Our Partner\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </br>\n" +
    "                            </br>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12\" ng-show=\"vm.isVendor()\" style=\"    padding-top: 20px;\">\n" +
    "                            <b style=\"color: #ec5d6e\">\n" +
    "                                ReferYogi\n" +
    "                            </b>\n" +
    "                            <br>\n" +
    "                                <p>\n" +
    "                                    Redemption Dashboard\n" +
    "                                </p>\n" +
    "                                <br>\n" +
    "                                    <div class=\"col-xs-6\">\n" +
    "                                        <button ng-click=\"vm.goVendorProfile()\" style=\"    float: left; width: 100%; background-image: none;\">\n" +
    "                                            Dashboard\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-xs-6\">\n" +
    "                                        <button ng-click=\"vm.Logout()\" style=\"float: left; width: 100%; background-image: none;\">\n" +
    "                                            Logout\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </br>\n" +
    "                            </br>\n" +
    "                        </div>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 main-header-search hidden-sm hidden-xs nopad\">\n" +
    "                    <input class=\"search_n\" ng-enter=\"vm.searchBox(vm.search_txt)\" ng-model=\"vm.search_txt\" placeholder=\"Search Offers\" type=\"text\">\n" +
    "                    </input>\n" +
    "                    <button class=\"search_n\" ng-click=\"vm.searchBox(vm.search_txt)\">\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <span class=\" hidden-sm hidden-xs \">\n" +
    "                    <div class=\"col-md-2 col-xs-12 col-sm-12 main-header-location text-center\">\n" +
    "                        <i class=\"glyphicon glyphicon-map-marker\">\n" +
    "                        </i>\n" +
    "                        <div class=\"dropdown\">\n" +
    "                            <span class=\"dropdown-toggle\" data-toggle=\"dropdown\" ng-init=\"   vm.Datacity();\" type=\"button\">\n" +
    "                                {{vm.City}}\n" +
    "                            </span>\n" +
    "                            <span class=\"caret\">\n" +
    "                            </span>\n" +
    "                            <ul class=\"dropdown-menu location-dropdown\">\n" +
    "                                <li ng-click=\"vm.setCityCookie(city)\" ng-repeat=\"city in vm.CityList\">\n" +
    "                                    <a>\n" +
    "                                        {{city.attributes.name}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 main-header-signin\" ng-hide=\"vm.isVendor()\">\n" +
    "                        <div class=\"dropdown\" ng-if=\"vm.isReferral() == true\">\n" +
    "                            <button class=\"dropbtn\">\n" +
    "                                <img alt=\"User-image\" ng-src=\"{{vm.user.profile_image}}\"/>\n" +
    "                            </button>\n" +
    "                            <div class=\"dropdown-content\" style=\"    left: -115px;\">\n" +
    "                                <div class=\"dropbox\">\n" +
    "                                    <b style=\"color: #ec5d6e\">\n" +
    "                                        Your Account\n" +
    "                                    </b>\n" +
    "                                    <p>\n" +
    "                                        Access Account & Manage Offers\n" +
    "                                    </p>\n" +
    "                                    <button ng-click=\"vm.goProfile()\" style=\"float: left;\">\n" +
    "                                        Profile\n" +
    "                                    </button>\n" +
    "                                    <button ng-click=\"vm.Logout()\" style=\"float: right;\">\n" +
    "                                        Logout\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <ul class=\"main-header-signups\" ng-if=\"vm.isReferral() == false\">\n" +
    "                            <li ng-hide=\"vm.isReferral()\">\n" +
    "                                <a href=\"#\" ng-click=\"vm.openLoginPopup('referral')\">\n" +
    "                                    Login\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li ng-hide=\"vm.isReferral()\">\n" +
    "                                <a href=\"#\" ng-click=\"vm.signupPOP('referral')\">\n" +
    "                                    Signup\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"col-md-2 main-header-partner\" ng-show=\"vm.isVendor()\">\n" +
    "                            <button ng-click=\"vm.goVendorProfile()\">\n" +
    "                                Dashboard\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-2 main-header-signin\" ng-show=\"vm.isVendor()\">\n" +
    "                            <button ng-click=\"vm.Logout()\">\n" +
    "                                Logout\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<hr/>\n" +
    "<style type=\"text/css\">\n" +
    "    .manage-account{\n" +
    "    background: #fff;\n" +
    "    padding: 20px 16px;\n" +
    "    text-align: left;\n" +
    "    width: 300px;\n" +
    "    position: absolute;\n" +
    "    z-index: 1;\n" +
    "    box-shadow: 0px 0px 6px #888;\n" +
    "    border-radius: 3px;\n" +
    "    top: 50px;\n" +
    "    left: -40px;\n" +
    "  }\n" +
    "  .manage-account i{\n" +
    "    text-align: right;\n" +
    "    display: block;\n" +
    "    color: #b3b3b3;\n" +
    "  }\n" +
    "  .manage-account b{\n" +
    "    margin: 10px 0px;\n" +
    "  }\n" +
    "  .manage-account p{\n" +
    "    margin: 10px 0px;\n" +
    "  }\n" +
    "  .manage-account button{\n" +
    "    font-weight: 300;\n" +
    "    letter-spacing: 1px;\n" +
    "    margin-right: 15px;\n" +
    "  }\n" +
    "</style>\n"
  );


  $templateCache.put('app/modules/login_auth/login.html',
    "<div class=\"container\">\n" +
    "    <div class=\"col-md-4 col-md-offset-4\">\n" +
    "        <div class=\"well login-container\">\n" +
    "            <h3 class=\"text-center\">\n" +
    "                LOGIN\n" +
    "            </h3>\n" +
    "            <input placeholder=\"Enter your email\" type=\"email\">\n" +
    "                <input placeholder=\"Enter your password\" type=\"password\">\n" +
    "                    <button>\n" +
    "                        LOGIN\n" +
    "                    </button>\n" +
    "                    <div class=\"text-center\">\n" +
    "                        (or)\n" +
    "                    </div>\n" +
    "                    <button class=\"btn btn-default\" ng-click=\"vm.FbLogin()\" type=\"button\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-facebook\" style=\"color:#4267b2;\">\n" +
    "                        </i>\n" +
    "                        Facebook\n" +
    "                    </button>\n" +
    "                    <button class=\"btn btn-default\" ng-click=\"vm.GoogleLogin()\" type=\"button\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-google\" style=\"color: #f55344;\">\n" +
    "                        </i>\n" +
    "                        Google\n" +
    "                    </button>\n" +
    "                    <a style=\"display: block; text-align: center; margin-top: 10px;\" ui-sref=\"signup\">\n" +
    "                        Don't have account click here\n" +
    "                    </a>\n" +
    "                </input>\n" +
    "            </input>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<style>\n" +
    "    .login-container{\n" +
    "		background: #fff;\n" +
    "		margin: 50% 0;\n" +
    "	}\n" +
    "	.login-container input, .login-container button{\n" +
    "		width: 100%;\n" +
    "		display: block;\n" +
    "		margin: 10px 0;\n" +
    "	}\n" +
    "</style>\n"
  );


  $templateCache.put('app/modules/pop-ups/popup.html',
    "<toast>\n" +
    "</toast>\n" +
    "\n" +
    "<style type=\"text/css\">\n" +
    "    \n" +
    "    \n" +
    "    .but:hover\n" +
    "    {    color: #e85826;\n" +
    "    background-color: #fff;\n" +
    "    border: 2px solid #e85826;\n" +
    "\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<!-- City -->\n" +
    "<div class=\"overlay\" id=\"choose-city\">\n" +
    "\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row \">\n" +
    "              <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12  white nopad\">\n" +
    "\n" +
    "\n" +
    "                     <div class=\"col-md-1 nopad ico\" style=\"float: right;\n" +
    "    margin-top: -13px;\">\n" +
    "                     <!--    <i aria-hidden=\"true\" class=\"fa fa-close offer-logo-40px mar10\" >\n" +
    "                        </i> -->\n" +
    "                    </div>\n" +
    "\n" +
    "                <div class=\"text-center  nopad pad-bot-10\">\n" +
    "                    <img class=\"poplogo\" style=\"    height: 70px;\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "        \n" +
    "                            <h4>Choose City</h4>        \n" +
    "\n" +
    "                            <div class=\"col-md-12\" style=\"    padding: 15px 0px;\">\n" +
    "                            <div class=\"col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 \">\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                <select class=\"form-control\" ng-init=\"vm.selectedCity=0\" ng-model=\"vm.selectedCity\">\n" +
    "                                   <option ng-repeat=\"(id,value) in vm.cities() track by $index\" ng-value=\"{{$index}}\"   >\n" +
    "                                     {{value.attributes.name}}\n" +
    "                                   </option>\n" +
    "                                 </select>\n" +
    "\n" +
    "<!-- \n" +
    "                                <select class=\"form-control\"  ng-init=\"vm.selectedCity='Chennai'\" ng-model=\"vm.selectedCity\"  ng-options=\"x.attributes.name for x in vm.cities()\">\n" +
    "                                </select>\n" +
    " -->\n" +
    "\n" +
    "                                   <!--  <select class=\"form-control\" ng-modal=\"vm.tempCitydata\" >\n" +
    "                                    <option ng-value=\"city\" ng-repeat=\"city in vm.cities()\" ng-click=\"vm.setCityCookie(city)\">{{city.attributes.name}}</option>\n" +
    "                                      </select>   -->\n" +
    "                            </div>\n" +
    "\n" +
    "                              <div class=\"col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2\" style=\"     padding-bottom: 15px;   margin-top: 15px;\">\n" +
    "                          \n" +
    "                            <button  ng-click=\"vm.setCityCookie(vm.cities()[vm.selectedCity])\" class=\"form-control\" style=\"background: #d8091f;\n" +
    "    color: white;\n" +
    "    font-size: 16px;\">Select</button>\n" +
    "\n" +
    "                                </div>\n" +
    "                                </div>\n" +
    "\n" +
    "              <!--           <div class=\"col-md-12 col-xs-12 col-sm 12 \" style=\"   padding-top: 50px;  padding-bottom: 10px;\">\n" +
    "\n" +
    "\n" +
    "                                 <div class=\"col-md-6 col-xs-6 col-sm-6 text-center but\" ng-repeat=\"city in vm.cities()\" ng-click=\"vm.setCityCookie(city)\">\n" +
    "                                        <h3 style=\"    margin: 10px 0;cursor: pointer;\">{{city.attributes.name}} </h3>\n" +
    "                                </div>     \n" +
    "                        </div> -->\n" +
    "           \n" +
    "                      <!--         <h4>\n" +
    "                           Choose Location to Continue\n" +
    "                        </h4> -->\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "             \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end login code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- login POPUP -->\n" +
    "<div class=\"overlay\" id=\"login-popup\">\n" +
    "<!--     <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeLoginPopup()\">\n" +
    "        ×\n" +
    "    </a> -->\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row \">\n" +
    "            <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12  white nopad\">\n" +
    "\n" +
    "                     <div class=\"col-md-1 nopad ico\" style=\"float: right;\n" +
    "    margin-top: -13px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-close offer-logo-40px mar10\" ng-click=\"vm.closeLoginPopup()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "                <div class=\"text-center bg-grey nopad pad-bot-10\">\n" +
    "                    <img class=\"poplogo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "                        <h3>\n" +
    "                            ReferYogi Sign in\n" +
    "                        </h3>\n" +
    "                        <br/>\n" +
    "                        <h5>\n" +
    "                            Share & Earn Treasure..!!!\n" +
    "                        </h5>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"text-center temp\" ng-controller=\"LoginCtrl as vm\">\n" +
    "                    <button class=\"btn btn-block fbbutton \" ng-click=\"vm.FbLogin()\">\n" +
    "                        <span class=\"fa fa-facebook left falign\">\n" +
    "                        </span>\n" +
    "                        Sign In with Facebook\n" +
    "                    </button>\n" +
    "                   <!--  <button class=\"btn btn-block gbutton\" g-login=\"\" ng-click=\"vm.GoogleLogin('google')\">\n" +
    "                        <span class=\"fa fa-google left falign\">\n" +
    "                        </span>\n" +
    "                        Sign in with Google\n" +
    "                    </button> -->\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end login code -->\n" +
    "<!-- login POPUP -->\n" +
    "<div class=\"overlay\" id=\"login-signup\">\n" +
    "<!--     <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.signupPOPClose()\">\n" +
    "        ×\n" +
    "    </a> -->\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row \">\n" +
    "              <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12  white nopad\">\n" +
    "\n" +
    "\n" +
    "                     <div class=\"col-md-1 nopad ico\" style=\"float: right;\n" +
    "    margin-top: -13px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-close offer-logo-40px mar10\" ng-click=\"vm.signupPOPClose()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "                <div class=\"text-center bg-grey nopad pad-bot-10\">\n" +
    "                    <img class=\"poplogo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "                        <h3>\n" +
    "                            Sign up with ReferYogi\n" +
    "                        </h3>\n" +
    "                        <br/>\n" +
    "                        <h5>\n" +
    "                            Share & Earn Treasure..!!!\n" +
    "                        </h5>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"text-center temp\" ng-controller=\"LoginCtrl as vm\">\n" +
    "                    <button class=\"btn btn-block fbbutton \" ng-click=\"vm.FbLogin('facebook')\">\n" +
    "                        <span class=\"fa fa-facebook left falign\">\n" +
    "                        </span>\n" +
    "                        Sign Up with Facebook\n" +
    "                    </button>\n" +
    "         <!--            <button class=\"btn btn-block gbutton\" g-login=\"\" ng-click=\"vm.GoogleLogin('google')\">\n" +
    "                        <span class=\"fa fa-google left falign\">\n" +
    "                        </span>\n" +
    "                        Sign UP with Google\n" +
    "                    </button> -->\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end login code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- login POPUP -->\n" +
    "<div class=\"overlay\" id=\"login-popup\">\n" +
    "<!--     <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeLoginPopup()\">\n" +
    "        ×\n" +
    "    </a> -->\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row \">\n" +
    "            <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12  white nopad\">\n" +
    "\n" +
    "                     <div class=\"col-md-1 nopad ico\" style=\"float: right;\n" +
    "    margin-top: -13px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-close offer-logo-40px mar10\" ng-click=\"vm.closeLoginPopup()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "                <div class=\"text-center bg-grey nopad pad-bot-10\">\n" +
    "                    <img class=\"poplogo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "                        <h3>\n" +
    "                            ReferYogi Sign in\n" +
    "                        </h3>\n" +
    "                        <br/>\n" +
    "                        <h5>\n" +
    "                            Share & Earn Treasure..!!!\n" +
    "                        </h5>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"text-center temp\" ng-controller=\"LoginCtrl as vm\">\n" +
    "                    <button class=\"btn btn-block fbbutton \" ng-click=\"vm.FbLogin()\">\n" +
    "                        <span class=\"fa fa-facebook left falign\">\n" +
    "                        </span>\n" +
    "                        Sign In with Facebook\n" +
    "                    </button>\n" +
    "                   <!--  <button class=\"btn btn-block gbutton\" g-login=\"\" ng-click=\"vm.GoogleLogin('google')\">\n" +
    "                        <span class=\"fa fa-google left falign\">\n" +
    "                        </span>\n" +
    "                        Sign in with Google\n" +
    "                    </button> -->\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end login code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Get Code POPUP -->\n" +
    "<div class=\"overlay\" id=\"confirm-code-popup\" style=\"top: 5%\">\n" +
    "    <div class=\"overlay-content\">\n" +
    "      \n" +
    "            <div class=\"col-md-8 row col-md-offset-2 white pad-bot0 pad10 \">\n" +
    "                  <div class=\"row \" ng-repeat=\"item in vm.getSelectedOfferData()\">\n" +
    "                <div class=\"row mar20bt\">\n" +
    "                    <div class=\"col-md-1 col-sm-2 col-xs-2 nopad ico\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-arrow-left offer-logo-40px mar10\" ng-click=\"vm.closegetcodepopup()\" style=\"padding-left: 11px;\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-8 col-sm-6 col-xs-6 nopad text-left\">\n" +
    "                        <h4 class=\"mar10\">\n" +
    "                            <b>\n" +
    "                                {{item.attributes.name}}\n" +
    "                            </b>\n" +
    "                        </h4>\n" +
    "                        <div class=\"offer-location\">\n" +
    "                            <b>\n" +
    "                                At {{item.attributes.business_name}} -\n" +
    "                            </b>\n" +
    "                            <span>\n" +
    "                                {{item.attributes.place}}\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 col-sm-4 col-xs-4 text-right\">\n" +
    "                        <img class=\"offer-logo-set\" style=\"    padding-right: 10px;\" ng-src=\"    {{item.attributes.business_avatar_thumb}}\">\n" +
    "                        </img>\n" +
    "                    </div>\n" +
    "                 \n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row backcls mar-10px text-left\">\n" +
    "                <div class=\"form-group popupcenter padtop40 \">\n" +
    "                    <div class=\"col-md-12 nopad text-center\" ng-show=\"vm.isReferral()\">\n" +
    "                        <h4 class=\"marbt20\">\n" +
    "                            Hi  {{vm.username()}}\n" +
    "                        </h4>\n" +
    "                        <h4 class=\"marbt20\">\n" +
    "                            Availing this offer will add  Rs.{{item.attributes.treasure_value}} to your ReferYogi Wallet!\n" +
    "                        </h4>\n" +
    "                        <h4 class=\"marbt20\">\n" +
    "                            Offer code sent to your registered mobile No - \n" +
    "\n" +
    "\n" +
    "\n" +
    "                  {{vm.usermobile()}}\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-12 nopad text-center\" ng-hide=\"vm.isReferral()\">\n" +
    "                        <h4 class=\"marbt20\">\n" +
    "                            Hi  Guest\n" +
    "                        </h4>\n" +
    "                        <h4 class=\"marbt20\">\n" +
    "                            Offer code sent to your registered mobile No - \n" +
    "\n" +
    "                  {{vm.mobile()}}\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-12 nopad gpad text-center\" ng-show=\"vm.isReferral()\">\n" +
    "                        <span class=\"offer-spini\">\n" +
    "                            <i aria-hidden=\"true\" class=\"fa fa-share-alt-square link-icon\">\n" +
    "                            </i>\n" +
    "                            SHARE & EARN\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-12 nopad gpad text-center\" ng-hide=\"vm.isReferral()\">\n" +
    "                        <span class=\"offer-spini\" ng-click=\"vm.signupPOP()\">\n" +
    "                            <i aria-hidden=\"true\" class=\"fa fa-share-alt-square link-icon\">\n" +
    "                            </i>\n" +
    "                            SIGN UP & SHARE & EARN\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row backcls mar-10px text-left dotted\" ng-hide=\"vm.isReferral()\">\n" +
    "                <div class=\"col-md-12 nopad\" style=\"margin-top: 10px\">\n" +
    "                    <div class=\"col-md-12 nopad text-center\">\n" +
    "                        <p class=\"font15px popupfoot1 \">\n" +
    "                            <b>\n" +
    "                                Become a ReferYogi to enjoy the Treasure amount hidden under every offer!!!\n" +
    "                            </b>\n" +
    "                            <br/>\n" +
    "                        </p>\n" +
    "                        <div class=\"social pad-bot10 padtop30 popupfoot1\">\n" +
    "                            <a class=\"fa fa-twitter twitter\" ng-click=\"vm.signupPOP()\" title=\"\">\n" +
    "                            </a>\n" +
    "                            <a class=\"fa fa-facebook fb\" ng-click=\"vm.signupPOP()\" title=\"\">\n" +
    "                            </a>\n" +
    "                            <a class=\"fa fa-clone clone\" ng-click=\"vm.signupPOP()\" title=\"\">\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row backcls mar-10px text-left dotted\" ng-show=\"vm.isReferral()\">\n" +
    "                <div class=\"col-md-12 nopad mar45\">\n" +
    "                    <div class=\"col-md-12 nopad text-center\">\n" +
    "                        <p class=\"font15px popupfoot1 \">\n" +
    "                            <b>\n" +
    "                                Keep Sharing and Earn upto Rs.{{item.attributes.treasure_value}} every time the code is Redeemed\n" +
    "                            </b>\n" +
    "                        </p>\n" +
    "                        <div class=\"social pad-bot10 padtop30 popupfoot1\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "\n" +
    "\n" +
    "<!-- Get Code POPUP mobile no-->\n" +
    "<div class=\"overlay\" id=\"get-code-popup\">\n" +
    "\n" +
    "    <div class=\"overlay-content\" style=\"    top: 5%;\">\n" +
    "\n" +
    "\n" +
    "           \n" +
    "\n" +
    "        <div class=\"row \"  ng-repeat=\"item in vm.getSelectedOfferData()\">\n" +
    "\n" +
    "\n" +
    "   <div class=\"col-md-8 row col-md-offset-2 white pad-bot0 pad10 \">\n" +
    "        \n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"row mar20bt\">\n" +
    "\n" +
    "                        \n" +
    "                    <div class=\"col-md-1  col-sm-2 col-xs-2 nopad ico\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-arrow-left offer-logo-40px mar10\" style=\"padding-left: 11px;\" ng-click=\"vm.closeGetNoPopup()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "           \n" +
    "\n" +
    "                     <div class=\"col-md-8  col-sm-6 col-xs-6 nopad text-left\">\n" +
    "                        <h4 class=\"mar10\">\n" +
    "                            <b>\n" +
    "                                  {{item.attributes.name}}\n" +
    "                            </b>\n" +
    "                        </h4>\n" +
    "                        <div class=\"offer-location\">\n" +
    "                            <b>\n" +
    "                                At {{item.attributes.business_name}} -\n" +
    "                            </b>\n" +
    "                            <span>\n" +
    "                                {{item.attributes.place}}\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 col-sm-4 col-xs-4 text-right\">\n" +
    "                        <img class=\"offer-logo-set\" style=\"    padding-right: 43px;\" ng-src=\"    {{item.attributes.business_avatar_thumb}}\">\n" +
    "                        \n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    </hr>\n" +
    "                </div>\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group popupcenter \">\n" +
    "                        <form name=\"get_coupen\" ng-submit=\"vm.sentMobileNo(mobile,true,item.id)\" novalidate=\"\">\n" +
    "                            <div class=\"col-md-8 nopad\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your mobile no to get code\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" maxlength=\"10\" minlength=\"10\" name=\"mobile\" ng-model=\"mobile\" ng-pattern=\"/^[0-9]+$/\" placeholder=\"Mobile no\" required=\"\" type=\"number\">\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 10 digits required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.maxlength\" style=\"color: red\">\n" +
    "                                        Maximum 10 digits only allowed.\n" +
    "                                    </span>\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-4 nopad mar25x\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"get_coupen.$invalid\" type=\"submit\">\n" +
    "                                    SEND CODE!\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                        <div class=\"col-md-12 nopad mar40\">\n" +
    "                            <span class=\"offer-spini\">\n" +
    "                                <i aria-hidden=\"true\" class=\"fa fa-gift link-icon fagift\">\n" +
    "                                </i>\n" +
    "                                MY TREASURE\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row backcls mar-10px text-left dotted\">\n" +
    "                    <div class=\"col-md-12 nopad mar40\">\n" +
    "                        <p class=\"font15px popupfoot pad-bot \">\n" +
    "                            Psst...!\n" +
    "                            <br/>\n" +
    "                            Sign up to become a ReferYogi referral and earn the Treasure amount with this offer!\n" +
    "                            <br/>\n" +
    "                        </p>\n" +
    "                        <p class=\"fbblue font15px popupfoot pad-bot\" ng-click=\"vm.signupPOP()\">\n" +
    "                            <i aria-hidden=\"true\" class=\"fa fa-facebook link-icon\">\n" +
    "                            </i>\n" +
    "                            SIGN UP WITH FACEBOOK\n" +
    "                            <br/>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Get  Register for vendor-->\n" +
    "<div class=\"overlay\" id=\"vendor-popup\" >\n" +
    "\n" +
    "  <!--   <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeVendorRegister()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    " -->\n" +
    "\n" +
    "    <div class=\"overlay-content\" style=\"top: 2%\" >\n" +
    "        <div class=\"row\" >\n" +
    "            <div class=\"col-md-8 row col-md-offset-2  pad-bot0 pad10 \">\n" +
    "\n" +
    "                              <div class=\"col-md-1 nopad ico\" style=\"float: right;    z-index: 999;\n" +
    "    margin-top: -13px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-close offer-logo-40px mar10\" ng-click=\"vm.closeVendorRegister()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group  \">\n" +
    "                        <form name=\"vendorReg\" ng-submit=\"vm.CreateVendor(mobile)\" novalidate=\"\">\n" +
    "\n" +
    "<div class=\"col-md-12\">\n" +
    "\n" +
    "    <h4 class=\"text-center\">Vendor Sign Up</h4>\n" +
    "\n" +
    "                                <div class=\"col-md-8 row col-md-offset-2  filedmat \">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your name\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\"  name=\"name\" ng-model=\"vm.Vendor.name\"  placeholder=\"Name\" required=\"\" type=\"tex\">\n" +
    "                                  \n" +
    "                                  <span ng-show=\"(vendorReg.name.$touched || submitted) && vendorReg.name.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your name !\n" +
    "                                     </span>\n" +
    "\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                            <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your mobile\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" maxlength=\"10\" minlength=\"10\" name=\"mobile\" ng-model=\"vm.Vendor.mobile\" ng-pattern=\"/^[0-9]+$/\" placeholder=\"Mobile no\" required=\"\" type=\"number\">\n" +
    "                                    <span ng-show=\"(vendorReg.mobile.$touched || submitted) && vendorReg.mobile.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 10 digits required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(vendorReg.mobile.$touched || submitted) && vendorReg.mobile.$error.maxlength\" style=\"color: red\">\n" +
    "                                        Maximum 10 digits only allowed.\n" +
    "                                    </span>\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                 <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your email\n" +
    "                                </label>\n" +
    "\n" +
    "\n" +
    "                                  \n" +
    "         \n" +
    "\n" +
    "\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\"  name=\"email\" ng-model=\"vm.Vendor.email\"  placeholder=\"Email\" required=\"\" type=\"email\">\n" +
    "\n" +
    "\n" +
    "                                     <span ng-show=\"(vendorReg.email.$touched || submitted) && vendorReg.email.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your email !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                             <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your password (Min 8 characters)\n" +
    "                                </label> \n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" min=\"8\"  max=\"8\" name=\"password\" ng-model=\"vm.Vendor.password\" \n" +
    "                                 placeholder=\"Password\" required=\"\" type=\"password\">\n" +
    "\n" +
    "\n" +
    "                                       <span ng-show=\"(vendorReg.password.$touched || submitted) && vendorReg.password.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 3 character  required.\n" +
    "                                    </span>\n" +
    "\n" +
    "\n" +
    "                                    <span ng-show=\"(vendorReg.password.$touched || submitted) && vendorReg.password.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your password !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "\n" +
    "\n" +
    "                               <div  ng-click=\"vm.VendorLoginPopup()\" class=\"mar20\">\n" +
    "\n" +
    "                                Already have an account? Log in\n" +
    "</div>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                            <div class=\"col-md-4 row col-md-offset-4 mar25x slven\" style=\"    padding-right: 30px;\n" +
    "    padding-left: 30px;\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"vendorReg.$invalid\" type=\"submit\">\n" +
    "                                    Create Vendor Account\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                       \n" +
    "                        </form>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Vendor Login-->\n" +
    "<div class=\"overlay\" id=\"vendor-popup-login\">\n" +
    "\n" +
    "<!--     <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeVendorLoginPopup()\">\n" +
    "        ×\n" +
    "    </a> -->\n" +
    "\n" +
    "\n" +
    "    <div class=\"overlay-content\" style=\"top: 2%\" >\n" +
    "        <div class=\"row\" >\n" +
    "            <div class=\"col-md-6 row col-md-offset-3  pad-bot0 pad10 \">\n" +
    "\n" +
    "\n" +
    "                        \n" +
    "\n" +
    "                              <div class=\"col-md-1 col-sm-1 col-xs-1 nopad ico\" style=\"float: right;    z-index: 999;\n" +
    "    margin-top: -13px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-close offer-logo-40px mar10\" ng-click=\"vm.closeVendorLoginPopup()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group  \">\n" +
    "                        <form name=\"VendorData\" ng-submit=\"vm.VendorLogin()\" novalidate=\"\">\n" +
    "\n" +
    "<div class=\"col-md-12\">\n" +
    "\n" +
    "    <h4 class=\"text-center\">Vendor Sign In</h4>\n" +
    "\n" +
    "         \n" +
    "                                 <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your email\n" +
    "                                </label>\n" +
    "\n" +
    "\n" +
    "                                  \n" +
    "         \n" +
    "\n" +
    "\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\"  name=\"email\" ng-model=\"vm.Vendor.email\"  placeholder=\"Email\" required=\"\" type=\"email\">\n" +
    "\n" +
    "\n" +
    "                                     <span ng-show=\"(VendorData.email.$touched || submitted) && VendorData.email.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your email !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                             <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your password (Min 8 characters)\n" +
    "                                </label> \n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" min=\"8\"  max=\"8\" name=\"password\" ng-model=\"vm.Vendor.password\" \n" +
    "                                 placeholder=\"Password\" required=\"\" type=\"password\">\n" +
    "\n" +
    "\n" +
    "                                       <span ng-show=\"(VendorData.password.$touched || submitted) && VendorData.password.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 3 character  required.\n" +
    "                                    </span>\n" +
    "\n" +
    "\n" +
    "                                    <span ng-show=\"(VendorData.password.$touched || submitted) && VendorData.password.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your password !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                </div>\n" +
    "\n" +
    "                            <div class=\"col-md-4 row col-md-offset-4 mar25x slven\" style=\"    padding-right: 30px;\n" +
    "    padding-left: 30px;\">\n" +
    "                                 <button class=\"btn min40 width100 nbr\" ng-disabled=\"VendorData.$invalid\" type=\"submit\">\n" +
    "                                   Login\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                        </form>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- OFFERS POPUP 1st-->\n" +
    "<div class=\"overlay\" id=\"offer-popup\">\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div style=\"min-height: 305px\">\n" +
    "            <div active=\"active\" interval=\"myInterval\" no-wrap=\"noWrapSlides\" on-carousel-change=\"vm.onSlideChanged(nextSlide, direction)\" uib-carousel=\"\">\n" +
    "                <div index=\"$index\" ng-repeat=\"item in vm.getItems() track by $index\" uib-slide=\"\">\n" +
    "                    <div class=\"row \">\n" +
    "                  \n" +
    "                        <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 white pad10\">\n" +
    "                            \n" +
    " \n" +
    "\n" +
    "\n" +
    "                                        <span class=\" close closif fa-stack \" style=\"font-size: 12px;\" ng-click=\"vm.closeSlidepopup()\">\n" +
    "  <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n" +
    "  <i class=\"fa fa-close fa-stack-1x\"></i>\n" +
    "</span>\n" +
    "\n" +
    "\n" +
    "                            <div class=\"col-md-5 nopad\">\n" +
    "                                <img   class=\"img-responsive\" ng-src=\"{{item.attributes.avatar_medium}}\" style=\"width: 100% !important;\"/>\n" +
    "                               \n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-7 nopad\">\n" +
    "                                <div class=\"pad-top-none offer-details text-left\">\n" +
    "                                    <div class=\"row\">\n" +
    "\n" +
    "                                        \n" +
    "                                        <div class=\"col-md-8 col-sm-6 col-xs-6\">\n" +
    "                                            <h3 class=\"tm\">\n" +
    "                                                {{item.attributes.name}}\n" +
    "                                            </h3>\n" +
    "                                            <div class=\"ts pad5 offer-location\">\n" +
    "                                                <b>\n" +
    "                                                    At {{item.attributes.business_name}} at\n" +
    "                                                </b>\n" +
    "                                                <span>\n" +
    "                                                    {{item.attributes.place}}\n" +
    "                                                </span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-4 col-sm-6 hidden-xs text-right \" >\n" +
    "\n" +
    "\n" +
    "                                            <img class=\"img-responsive\"  style=\"       float: right; margin-top: 3px; height: 70px;\" ng-src=\"{{item.attributes.business_avatar_thumb}}\" ng-if=\"item.attributes.business_avatar_thumb != null\">\n" +
    "                                            </img>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row space-div\">\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <button ng-click=\"vm.getcodepopup(item.id)\">\n" +
    "                                                GET CODE!\n" +
    "                                            </button>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <span class=\"offer-spini\" ng-show=\" {{item.attributes.treasure_value}}\">\n" +
    "                                                <i aria-hidden=\"true\" class=\"fa fa-gift link-icon fagift\">\n" +
    "                                                </i>\n" +
    "                                                Treasure Upto \n" +
    "                                               \n" +
    "                                                 ₹ {{item.attributes.treasure_value}}\n" +
    "                                            </span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-2 \">\n" +
    "                                            <!--       <span class=\"offer-count\">\n" +
    "                                                <i aria-hidden=\"true\" class=\"fa fa-star-o link-icon \">\n" +
    "                                                </i>\n" +
    "                                                54\n" +
    "                                            </span> -->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"min-height160px\">\n" +
    "                                        <div class=\"col-md-10 nopad\">\n" +
    "                                            <p class=\"read\" hm-dots-class=\"dots\" hm-less-text=\"Read less\" hm-limit=\"300\" hm-link-class=\"read-more\" hm-more-text=\"Read more\" hm-read-more=\"\" hm-text=\"{{ item.attributes.description | nl2br }}\">\n" +
    "                                            </p>\n" +
    "                                            <p class=\"offer-wrap-text space-div\">\n" +
    "                                                **OFFER VALID TILL {{item.attributes.end_date | date:'mediumDate'}} only at {{item.attributes.business_name}} @ {{item.attributes.place}}\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-2\">\n" +
    "                                            <div class=\"offer-share col-md-6\">\n" +
    "                                                <label>\n" +
    "                                                    SHARE\n" +
    "                                                </label>\n" +
    "                                                <ul ng-show=\" {{item.attributes.treasure_value}}\">\n" +
    "                                                    <li class=\"offer-share-max\">\n" +
    "                                                        <a data-clipboard-text=\"{{vm.OfferLink(item.attributes.seo_url,item.attributes.tracking_code.general)}}\" ngclipboard=\"\" ngclipboard-success=\"vm.onCopySuccess(e);\">\n" +
    "                                                        </a>\n" +
    "                                                    </li>\n" +
    "                                                    <li class=\"offer-share-fb\">\n" +
    "                                                        <a ng-click=\"vm.SocialShareUpdate(item.attributes.seo_url,'facebook')\" socialshare=\"\" socialshare-provider=\"facebook\" socialshare-url=\"{{vm.OfferLink(item.attributes.seo_url,item.attributes.tracking_code.facebook)}}\">\n" +
    "                                                        </a>\n" +
    "                                                    </li>\n" +
    "                                                    <li class=\"offer-share-twitter\">\n" +
    "                                                        <a ng-click=\"vm.SocialShareUpdate(item.attributes.seo_url,'twitter')\" socialshare=\"\" socialshare-hashtags=\"{item.attributes.seo_keywords}}\" socialshare-provider=\"twitter\" socialshare-text=\"{{item.attributes.seo_description}} {{item.attributes.seo_keywords}}\" socialshare-url=\"{{vm.OfferLink(item.attributes.seo_url,item.attributes.tracking_code.general)}}\">\n" +
    "                                                        </a>\n" +
    "                                                    </li>\n" +
    "\n" +
    "                                                    <li class=\"offer-share-twitter hidden-lg hidden-md\" style=\"background: url('share-whatsapp.png') no-repeat;\n" +
    "    background-size: contain;\">\n" +
    "\n" +
    "\n" +
    "    <a socialshare=\"\" \n" +
    "        socialshare-provider=\"whatsapp\" \n" +
    "     socialshare-text=\"{{item.attributes.caption}}\"\n" +
    "     socialshare-url=\"{{vm.OfferLink(item.attributes.seo_url,item.attributes.tracking_code.general)}}\" style=\"    background: none;\">\n" +
    "    </a>\n" +
    "                                                  </li>\n" +
    "\n" +
    "                                                </ul>\n" +
    "                                                <ul ng-click=\"vm.signupPOP('referral')\" ng-hide=\" {{item.attributes.treasure_value}}\">\n" +
    "                                                    <li class=\"offer-share-max\">\n" +
    "                                                        <a>\n" +
    "                                                        </a>\n" +
    "                                                    </li>\n" +
    "                                                    <li class=\"offer-share-fb\">\n" +
    "                                                        <a>\n" +
    "                                                        </a>\n" +
    "                                                    </li>\n" +
    "                                                    <li class=\"offer-share-twitter\">\n" +
    "                                                        <a>\n" +
    "                                                        </a>\n" +
    "                                                    </li>\n" +
    "                                                </ul>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"offer-share col-md-6\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end OFFERS POPUP -->\n" +
    "<style type=\"text/css\">\n" +
    "    .offer-carousel-r1{\n" +
    "    width: 4%;\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/redeem_coupon/redeem_coupon.html',
    "<div class=\"container\" style=\"margin-top: 5px;\">\n" +
    "    <div class=\"col-md-2\">\n" +
    "        <label>\n" +
    "            Choose  Buiness :\n" +
    "        </label>\n" +
    "        <select class=\"form-control\" ng-change=\"vm.RedemptionsHistory()\" ng-model=\"vm.business_id\" ng-options=\"item.id as item.name for item in vm.vendor.businesses\" style=\"    min-width: 130px;\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- container for coupon redeem console -->\n" +
    "<section class=\"coupon-redeem-entry\">\n" +
    "    <h3>\n" +
    "        Enter Offer Price & Coupon Code\n" +
    "    </h3>\n" +
    "    <input class=\"price-entry\" ng-change=\"vm.showInfo=''\" ng-model=\"vm.amount\" placeholder=\"Enter Price\" type=\"number\"/>\n" +
    "    <input class=\"coupon-entry\" min=\"1\" ng-change=\"vm.showInfo=''\" ng-disabled=\"vm.amount==null\" ng-model=\"vm.coupon_code\" placeholder=\"Enter Coupon Code\" type=\"text\"/>\n" +
    "    <div class=\"txt-list\" ng-show=\"vm.showInfo\">\n" +
    "        <h5>\n" +
    "            Offer Applied {{vm.showInfo.savings}} {{vm.showInfo.savings_type}}\n" +
    "        </h5>\n" +
    "        <h5>\n" +
    "            Price : Rs.{{vm.showInfo.price}}\n" +
    "        </h5>\n" +
    "        <h5>\n" +
    "            Offer Amount: Rs.{{vm.showInfo.offer_amount}}\n" +
    "        </h5>\n" +
    "        <h4>\n" +
    "            Amount to Pay:\n" +
    "            <b>\n" +
    "                Rs.{{vm.showInfo.amount_to_pay}}\n" +
    "            </b>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <button ng-click=\"vm.redeemCoupon()\" ng-show=\"vm.showInfo\">\n" +
    "        REDEEM OFFER\n" +
    "    </button>\n" +
    "    <button ng-click=\"vm.checkCode()\" ng-hide=\"vm.showInfo\">\n" +
    "        CHECK OFFER CODE\n" +
    "    </button>\n" +
    "    <!--        <div class=\"pull-right\">\n" +
    "                <a>\n" +
    "                    FAQ\n" +
    "                </a>\n" +
    "                <a>\n" +
    "                    Troubleshoot\n" +
    "                </a>\n" +
    "            </div> -->\n" +
    "</section>\n" +
    "<!-- coupon table -->\n" +
    "<section ng-if=\"vm.History.length > 0\">\n" +
    "    <div class=\"container\">\n" +
    "        <table class=\"coupon-redeem-table col-md-12\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        OFFER ID\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        DATE\n" +
    "                    </td>\n" +
    "                    <!--     <td>TIME</td> -->\n" +
    "                    <td>\n" +
    "                        COUPON CODE\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        LOCATION\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        PRICE (INR)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        PAID AMOUNT(INR)\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in vm.History\">\n" +
    "                    <td>\n" +
    "                        {{item.attributes.offer_id}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.created_at}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.coupon_code}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.place}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.price}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.amount_paid_by_buyer}}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<!-- Get  mobile no for vendor-->\n" +
    "<div class=\"overlay\" id=\"get-vendor-mobile-no-popup\">\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-8 row col-md-offset-2 pad-bot0 pad10 \">\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group popupcenter \">\n" +
    "                        <form name=\"get_coupen\" ng-submit=\"vm.UpdateMobile(mobile)\" novalidate=\"\">\n" +
    "                            <div class=\"col-md-8 nopad\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your mobile No. to get Code\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" maxlength=\"10\" minlength=\"10\" name=\"mobile\" ng-model=\"mobile\" ng-pattern=\"/^[0-9]+$/\" placeholder=\"Mobile no\" required=\"\" type=\"number\">\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 10 digits required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.maxlength\" style=\"color: red\">\n" +
    "                                        Maximum 13 digits only allowed.\n" +
    "                                    </span>\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-4 nopad mar25x\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"get_coupen.$invalid\" type=\"submit\">\n" +
    "                                    UPDATE MOBILE NO\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "<style type=\"text/css\">\n" +
    "    .search_n{\n" +
    "\n" +
    "    display: none;\n" +
    "  }\n" +
    "\n" +
    "footer p\n" +
    "{\n" +
    "\n" +
    "    background: #f7f7f7;\n" +
    "              margin-top: 200px;\n" +
    "\n" +
    "    width: 100%;\n" +
    "}\n" +
    "\n" +
    ".main-header-partner {\n" +
    "    text-align: center;\n" +
    "    opacity: 0;\n" +
    "}\n" +
    ".txt-list\n" +
    "{\n" +
    "        background: white;\n" +
    "    padding: 10px;\n" +
    "    margin-bottom: 25px;\n" +
    "}\n" +
    "</style>\n"
  );


  $templateCache.put('app/modules/refferal_user/refferal.html',
    "<article>\n" +
    "    <div class=\"container\" style=\"padding: 15px;\">\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            <div class=\"row\" style=\"background-color: #fff;\">\n" +
    "                <div class=\"col-sm-12\" style=\"    margin-top: 10px;\">\n" +
    "                    <div class=\"side_nav_refferal\">\n" +
    "                        <img class=\"img-thumbnail\" height=\"150\" ng-src=\"{{vm.user.profile_image}}\" width=\"200\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <p class=\"text-center\" style=\"    margin-top: 20px;\">\n" +
    "                                    <b>\n" +
    "                                        {{vm.user.name}}\n" +
    "                                    </b>\n" +
    "                                </p>\n" +
    "                                <p class=\"text-muted text-center\">\n" +
    "                                    <b>\n" +
    "                                        {{vm.user.mobile}}\n" +
    "                                    </b>\n" +
    "                                </p>\n" +
    "                                <!-- <label><i class=\" glyphicon glyphicon-map-marker\">Location</i></label> -->\n" +
    "                            </div>\n" +
    "                        </img>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\" style=\"margin-top: 20px;\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <div class=\"sidebar-nav\">\n" +
    "                        <div class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "                            <div class=\"navbar-header\">\n" +
    "                                <button class=\"navbar-toggle\" data-target=\".sidebar-navbar-collapse\" data-toggle=\"collapse\" type=\"button\">\n" +
    "                                    <span class=\"sr-only\">\n" +
    "                                        Toggle navigation\n" +
    "                                    </span>\n" +
    "                                    <span class=\"icon-bar\">\n" +
    "                                    </span>\n" +
    "                                    <span class=\"icon-bar\">\n" +
    "                                    </span>\n" +
    "                                    <span class=\"icon-bar\">\n" +
    "                                    </span>\n" +
    "                                </button>\n" +
    "                                <span class=\"visible-xs navbar-brand\">\n" +
    "                                    Sidebar Menu\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                            <div class=\"navbar-collapse collapse sidebar-navbar-collapse\">\n" +
    "                                <ul class=\"nav navbar-nav\">\n" +
    "                                    <li style=\"font-size: 18px;\">\n" +
    "                                        <a>\n" +
    "                                            <i aria-hidden=\"true\" class=\"glyphicon glyphicon-stats pull-left\">\n" +
    "                                            </i>\n" +
    "                                            <span style=\"margin-left: 10px;\">\n" +
    "                                                Dashboard\n" +
    "                                            </span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                    <li style=\"font-size: 18px;\">\n" +
    "                                        <a>\n" +
    "                                            <i class=\"glyphicon glyphicon-user pull-left\">\n" +
    "                                            </i>\n" +
    "                                            <span style=\"margin-left: 10px;\">\n" +
    "                                            Profile\n" +
    "                                            </span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                    <li style=\"font-size: 18px;\">\n" +
    "                                        <a>\n" +
    "                                            <i class=\"glyphicon glyphicon-tag pull-left\">\n" +
    "                                            </i>\n" +
    "                                            <span style=\"margin-left: 10px;\">\n" +
    "                                            Saved Offer\n" +
    "                                            </span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                    <li style=\"font-size: 18px;\">\n" +
    "                                        <a>\n" +
    "                                            <i class=\"fa fa-inr pull-left\" style=\"font-size: 20px;\">\n" +
    "                                            </i>\n" +
    "                                            <span style=\"margin-left: 10px;\">\n" +
    "                                            Wallet\n" +
    "                                            </span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                            <!--/.nav-collapse -->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <img alt=\"Cinque Terre\" class=\"img-thumbnail\" height=\"236\" src=\"/app/assets/images/DashboardView.png\" width=\"100%\">\n" +
    "                    </img>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row content-refferal\">\n" +
    "                <div class=\"col-sm-3\" style=\"border-right: 1px dashed #dcdcdc;\">\n" +
    "                    <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-money\" style=\"font-size: 80px;\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12 text-center\">\n" +
    "                        <label class=\"text-muted\">\n" +
    "                            Wallet Money\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-inr\">\n" +
    "                        </i>\n" +
    "                        <label>\n" +
    "                            {{vm.user.wallet_money}}\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\" >\n" +
    "                        <button class=\"btn btn-default field-tip\" ng-disabled=\"vm.user.wallet_money<250\" style=\"    border: 1px solid #40799a;\n" +
    "    color: #155275;\" ng-click=\"vm.openPopup()\">\n" +
    "                            <span class=\"tip-content\" ng-hide=\"vm.user.wallet_money>250\">\n" +
    "                                Earn minimum Rs.250/- to make a transfer\n" +
    "                            </span>\n" +
    "                            Transfer to paytm wallet\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\" style=\"border-right: 1px dashed #dcdcdc;\">\n" +
    "                    <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-gift\" style=\"font-size: 80px;\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12 text-center\">\n" +
    "                        <label class=\"text-muted\">\n" +
    "                            Treasure Value\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-inr\">\n" +
    "                        </i>\n" +
    "                        <label>\n" +
    "                            {{vm.user.treasure_value}}\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\" style=\" border-right: 1px dashed #dcdcdc;\">\n" +
    "                    <div class=\"col-md-12 nopad\">\n" +
    "                        <div class=\"col-sm-12 text-center nopad\" style=\"padding-top: 35px;\">\n" +
    "                            <hr>\n" +
    "                                <div class=\"col-md-6 text-muted field-tip\">\n" +
    "                                    <span class=\"tip-content\" style=\"    right: 80%;\">\n" +
    "                                        Self : {{vm.user.offer_info.user.coupons}}\n" +
    "                            Guest : {{ vm.user.offer_info.guest.coupons}} \n" +
    "                            Children : {{ vm.user.offer_info.child.coupons }}\n" +
    "                                    </span>\n" +
    "                                    <label class=\"text-muted\" s>\n" +
    "                                        No of Code Generated : {{vm.user.offer_info.user.coupons + vm.user.offer_info.guest.coupons + vm.user.offer_info.child.coupons }}\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6 text-muted field-tip\">\n" +
    "                                    <label class=\"text-muted\">\n" +
    "                                        No of Shares : {{vm.user.offer_info.user.shares + vm.user.offer_info.guest.shares + vm.user.offer_info.child.shares }}\n" +
    "                                    </label>\n" +
    "                                    <span class=\"tip-content\"  style=\"    right: 80%;\">\n" +
    "                                        Self : {{vm.user.offer_info.user.shares}}\n" +
    "                            Guest : {{ vm.user.offer_info.guest.shares}} \n" +
    "                            Children : {{ vm.user.offer_info.child.shares }}\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                            </hr>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-12 nopad\">\n" +
    "                            <div class=\"col-sm-12 text-center nopad\" style=\"padding-top: 35px;\">\n" +
    "                                <hr>\n" +
    "                                    <div class=\"col-md-6 text-muted field-tip\">\n" +
    "                                        <span class=\"tip-content\"  style=\"    right: 80%;\">\n" +
    "                                            Self : {{vm.user.offer_info.user.redemptions}}\n" +
    "                            Guest : {{ vm.user.offer_info.guest.redemptions}} \n" +
    "                            Children : {{ vm.user.offer_info.child.redemptions }}\n" +
    "                                        </span>\n" +
    "\n" +
    "                                        <label class=\"text-muted\">\n" +
    "                                            No of Code Redeemed : {{vm.user.offer_info.user.redemptions + vm.user.offer_info.guest.redemptions + vm.user.offer_info.child.redemptions }}\n" +
    "                                        </label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6 text-center nopad\">\n" +
    "                                        <label class=\"text-muted\">\n" +
    "                                            No of Children : {{vm.user.child_references_count}}\n" +
    "                                        </label>\n" +
    "                                    </div>\n" +
    "                                </hr>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12\" ng-repeat=\"item in vm.user.offer_info track by $index\" style=\"font-size: 16px;\">\n" +
    "                        <!-- <p ng-if=\"$index == 0\">\n" +
    "        Your Info\n" +
    "    </p>\n" +
    "\n" +
    "    <p ng-if=\"$index == 1\">\n" +
    "        Your Guest\n" +
    "    </p>\n" +
    "    <p ng-if=\"$index == 2\">\n" +
    "        Your Child\n" +
    "    </p>\n" +
    "    <label class=\"text-capitalize\" style=\"    font-size: 13px;\">\n" +
    "        Clicks:{{item.clicks}}\n" +
    "    </label>\n" +
    "    <label class=\"text-capitalize\" style=\"    font-size: 13px;\">\n" +
    "        Sign ups:{{item.signups}}\n" +
    "    </label>\n" +
    "    <label class=\"text-capitalize\" style=\"    font-size: 13px;\">\n" +
    "        Views:{{item.views}}\n" +
    "    </label>\n" +
    "    <label class=\"text-capitalize\" style=\"    font-size: 13px;\">\n" +
    "        Shares:{{item.shares}}\n" +
    "    </label>\n" +
    "    <label class=\"text-capitalize\" style=\"    font-size: 13px;\">\n" +
    "        No Generated Coupons:{{item.coupons}}\n" +
    "    </label>\n" +
    "    <label class=\"text-capitalize\" style=\"    font-size: 13px;\">\n" +
    "        No Redemptions :    {{\n" +
    "                item.redemptions\n" +
    "            }}\n" +
    "    </label> -->\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "                        <!-- <button class=\"btn btn-default\"  style=\"border: 1px solid #b6f3d1; color:#b6f3d1;\">Get more offers</button> -->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</article>\n" +
    "<style type=\"text/css\">\n" +
    "    .side_nav_refferal{\n" +
    "     /*border: 1px solid black;*/\n" +
    "    height: 225px;\n" +
    "  }\n" +
    "  .list-group-item {\n" +
    "    position: relative;\n" +
    "    display: block;\n" +
    "    padding: 10px 15px 20px;\n" +
    "    margin-bottom: -1px;\n" +
    "   background-color: #f7f7f7;\n" +
    "    border: 1px solid #f7f7f7;\n" +
    "}\n" +
    "\n" +
    "/* make sidebar nav vertical */\n" +
    "@media (min-width: 768px) {\n" +
    "  .sidebar-nav .navbar .navbar-collapse {\n" +
    "    padding: 0;\n" +
    "    max-height: none;\n" +
    "  }\n" +
    "  .sidebar-nav .navbar ul {\n" +
    "    float: none;\n" +
    "    display: block;\n" +
    "  }\n" +
    "  .sidebar-nav .navbar li {\n" +
    "    float: none;\n" +
    "    display: block;\n" +
    "  }\n" +
    "  .sidebar-nav .navbar li a {\n" +
    "    padding-top: 12px;\n" +
    "    padding-bottom: 12px;\n" +
    "  }\n" +
    "}\n" +
    ".navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus , .navbar-default .navbar-nav > .active > a {\n" +
    "    color: red;\n" +
    "    background-color: transparent;\n" +
    "}\n" +
    ".navbar-default {\n" +
    "    background-color: #f8f8f8;\n" +
    "    border-color: #f8f8f8;\n" +
    "}\n" +
    "\n" +
    ".content-refferal{\n" +
    "      border: 1px solid #dcdcdc;\n" +
    "    margin: 2px;\n" +
    "    background-color: #fff;\n" +
    "}\n" +
    ".field-tip .tip-content {\n" +
    "z-index: 99;\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "\n" +
    "<!-- Get  PayTm Request-->\n" +
    "<div class=\"overlay\" id=\"get-paytm-no-popup\">\n" +
    "\n" +
    "      <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closePopup()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4 row col-md-offset-4 pad-bot0 pad10 \">\n" +
    "                <div class=\"row backcls mar-10px text-left\" style=\"padding: 20px;\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <form name=\"get_coupen\" ng-submit=\"vm.PaytmAsk(mobile,amount)\" novalidate=\"\">\n" +
    "                            <div class=\"col-md-12 nopad\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your paytm account no\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" maxlength=\"10\" minlength=\"10\" name=\"mobile\" ng-model=\"mobile\" ng-pattern=\"/^[0-9]+$/\" placeholder=\"Mobile no\" required=\"\" type=\"number\">\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 10 digits required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.maxlength\" style=\"color: red\">\n" +
    "                                        Maximum 10 digits only allowed.\n" +
    "                                    </span>\n" +
    "                                </input>\n" +
    "                            </div> \n" +
    "                            <div class=\"col-md-12 nopad\" style=\"padding-top: 25px;\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter Amount \n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\"\n" +
    "\n" +
    "\n" +
    "                                ng-min=\"100\"\n" +
    "                                ng-max=\"vm.user.wallet_money\"\n" +
    "\n" +
    "\n" +
    "                                 id=\"usr\"  name=\"amount\" \n" +
    "                                ng-model=\"amount\"   placeholder=\"Amount\" required=\"\" type=\"number\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                    <span ng-show=\"(get_coupen.amount.$touched || submitted) && get_coupen.amount.$error.min\" style=\"color: red\">\n" +
    "                                        Minimum 100 rs required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(get_coupen.amount.$touched || submitted) && get_coupen.amount.$error.max\" style=\"color: red\">\n" +
    "                                        Maximum {{vm.user.wallet_money}} rs only allowed.\n" +
    "                                    </span>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-6 nopad mar25x\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"get_coupen.$invalid\" type=\"submit\">\n" +
    "                                 Transfer to PayTm Wallet\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- Get  PayTm Request-->\n"
  );


  $templateCache.put('app/modules/signup/signup.html',
    "<div class=\"container\">\n" +
    "	<div class=\"col-md-4 col-md-offset-4\">\n" +
    "		<div class=\"well login-container\">\n" +
    "			<h3 class=\"text-center\">SIGN UP</h3>\n" +
    "			<input type=\"email\" placeholder=\"Enter your email\">\n" +
    "			<input type=\"password\" placeholder=\"Enter your password\">\n" +
    "			<input type=\"number\" placeholder=\"Enter your number\">\n" +
    "			<button>SIGN UP</button>\n" +
    "			<div class=\"text-center\">(or)</div>\n" +
    "			<button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-facebook\" aria-hidden=\"true\" style=\"color:#4267b2;\"></i>  Facebook</button>\n" +
    "			<button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-google\" aria-hidden=\"true\" style=\"color: #f55344;\"></i>Google</button>\n" +
    "			<a ui-sref=\"loginAuth\" style=\"display: block; text-align: center; margin-top: 10px;\">Already have login click here</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "	.login-container{\n" +
    "		background: #fff;\n" +
    "		margin: 50% 0;\n" +
    "}\n" +
    "	.login-container input, .login-container button{\n" +
    "		width: 100%;\n" +
    "		display: block;\n" +
    "		margin: 10px 0;\n" +
    "	}\n" +
    "\n" +
    "</style>"
  );

}]);
