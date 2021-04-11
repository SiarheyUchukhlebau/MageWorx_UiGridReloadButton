/**
 * Copyright © MageWorx. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiLayout'
], function (layout) {
    'use strict';

    return function (toolbar) {

        if (true) { // You can add some specific conditions here; Always pass by default.
            layout(
                [
                    {
                        config: {
                            extendProvider: true,
                            deps: [
                                'index = listing_top'
                            ]
                        },
                        index: 'refresh_button',
                        component: 'MageWorx_UiGridReloadButton/js/grid/controls/refreshButton',
                        name: 'refresh_button',
                        provider: '${ $.parentName }',
                        displayArea: 'dataGridActions',
                        insertTo: {
                            'index = listing_top': {
                                'position': 10
                            }
                        },
                    }
                ]
            );
        }

        return toolbar;
    };
});
