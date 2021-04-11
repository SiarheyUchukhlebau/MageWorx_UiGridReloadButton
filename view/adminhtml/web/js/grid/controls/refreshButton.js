/**
 * Copyright © MageWorx. All rights reserved.
 * See COPYING.txt for license details.
 */
define(
    [
        'uiComponent',
        'ko'
    ],
    function (Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'MageWorx_UiGridReloadButton/grid/controls/refreshButton',
            },

            initialize: function () {
                return this._super();
            },

            /**
             * Refresh listing data
             */
            refreshListing: function () {
                if (this.source) {
                    this.source.source.reload({'refresh': true});
                } else if (this.containers[0]) {
                    this.containers[0].source.reload({'refresh': true});
                } else {
                    console.log('Unable to locate listing source.');
                }
            }
        });
    }
)
