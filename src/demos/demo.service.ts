import { Injectable } from '@angular/core';

import {
  SkyActionButtonDemoComponent,
  SkyAlertDemoComponent,
  SkyAvatarDemoComponent,
  SkyCardDemoComponent,
  SkyCheckboxDemoComponent,
  SkyColorpickerDemoComponent,
  SkyConfirmationDialogDemoComponent,
  SkyDatepickerDemoComponent,
  SkyDefinitionListDemoComponent,
  SkyDropdownDemoComponent,
  SkyEmailValidationDemoComponent,
  SkyErrorDemoComponent,
  SkyFileattachmentsDemoComponent,
  SkyFilterDemoComponent,
  SkyFluidGridDemoComponent,
  SkyGridDemoComponent,
  SkyHelpInlineDemoComponent,
  SkyKeyInfoDemoComponent,
  SkyLabelDemoComponent,
  SkyLinkRecordsDemoComponent,
  SkyListDemoComponent,
  SkyListFiltersDemoComponent,
  SkyListPagingDemoComponent,
  SkyListToolbarDemoComponent,
  SkyListViewChecklistDemoComponent,
  SkyListViewGridDemoComponent,
  SkyMediaQueryDemoComponent,
  SkyModalDemoComponent,
  SkyNavbarDemoComponent,
  SkyNumericDemoComponent,
  SkyPageSummaryDemoComponent,
  SkyPagingDemoComponent,
  SkyPopoverDemoComponent,
  SkyRadioDemoComponent,
  SkyRepeaterDemoComponent,
  SkySearchDemoComponent,
  SkySectionedFormDemoComponent,
  SkySortDemoComponent,
  SkyTabsDemoComponent,
  SkyTextExpandDemoComponent,
  SkyTextHighlightDemoComponent,
  SkyTilesDemoComponent,
  SkyTimePickerDemoComponent,
  SkyToolbarDemoComponent,
  SkyUrlValidationDemoComponent,
  SkyVerticalTabsDemoComponent,
  SkyWaitDemoComponent,
  SkyWizardDemoComponent
} from './index';

@Injectable()
export class SkyDemoService {
  public components: any[] = [
    {
      component: SkyActionButtonDemoComponent,
      files: [
        {
          name: 'action-button-demo.component.html',
          fileContents: require('./action-button/action-button-demo.component.html')
        },
        {
          name: 'action-button-demo.component.ts',
          fileContents: require('./action-button/action-button-demo.component.ts')
        }
      ]
    },
    {
      component: SkyAlertDemoComponent,
      files: [
        {
          name: 'alert-demo.component.html',
          fileContents: require('./alert/alert-demo.component.html')
        },
        {
          name: 'alert-demo.component.ts',
          fileContents: require('./alert/alert-demo.component.ts')
        }
      ]
    },
    {
      component: SkyAvatarDemoComponent,
      files: [
        {
          name: 'avatar-demo.component.html',
          fileContents: require('./avatar/avatar-demo.component.html')
        },
        {
          name: 'avatar-demo.component.ts',
          fileContents: require('./avatar/avatar-demo.component.ts')
        }
      ]
    },
    {
      component: SkyCardDemoComponent,
      files: [
        {
          name: 'card-demo.component.html',
          fileContents: require('./card/card-demo.component.html')
        },
        {
          name: 'card-demo.component.ts',
          fileContents: require('./card/card-demo.component.ts')
        }
      ]
    },
    {
      component: SkyCheckboxDemoComponent,
      files: [
        {
          name: 'checkbox-demo.component.html',
          fileContents: require('./checkbox/checkbox-demo.component.html')
        },
        {
          name: 'checkbox-demo.component.ts',
          fileContents: require('./checkbox/checkbox-demo.component.ts')
        }
      ]
    },
    {
      component: SkyColorpickerDemoComponent,
      files: [
        {
          name: 'colorpicker-demo.component.html',
          fileContents: require('./colorpicker/colorpicker-demo.component.html')
        },
        {
          name: 'colorpicker-demo.component.ts',
          fileContents: require('./colorpicker/colorpicker-demo.component.ts')
        }
      ]
    },
    {
      component: SkyConfirmationDialogDemoComponent,
      files: [
        {
          name: 'confirmation-dialog-demo.component.html',
          fileContents: require('./confirmation-dialog/confirmation-dialog-demo.component.html')
        },
        {
          name: 'confirmation-dialog-demo.component.ts',
          fileContents: require('./confirmation-dialog/confirmation-dialog-demo.component.ts')
        }
      ]
    },
    {
      component: SkyDatepickerDemoComponent,
      files: [
        {
          name: 'datepicker-demo.component.html',
          fileContents: require('./datepicker/datepicker-demo.component.html')
        },
        {
          name: 'datepicker-demo.component.ts',
          fileContents: require('./datepicker/datepicker-demo.component.ts')
        }
      ]
    },
    {
      component: SkyDefinitionListDemoComponent,
      files: [
        {
          name: 'definition-list-demo.component.html',
          fileContents: require('./definition-list/definition-list-demo.component.html')
        },
        {
          name: 'definition-list-demo.component.ts',
          fileContents: require('./definition-list/definition-list-demo.component.ts')
        }
      ]
    },
    {
      component: SkyDropdownDemoComponent,
      files: [
        {
          name: 'dropdown-demo.component.html',
          fileContents: require('./dropdown/dropdown-demo.component.html')
        },
        {
          name: 'dropdown-demo.component.ts',
          fileContents: require('./dropdown/dropdown-demo.component.ts')
        }
      ]
    },
    {
      component: SkyEmailValidationDemoComponent,
      files: [
        {
          name: 'email-validation-demo.component.html',
          fileContents: require('./email-validation/email-validation-demo.component.html')
        },
        {
          name: 'email-validation.component.ts',
          fileContents: require('./email-validation/email-validation-demo.component.ts')
        }
      ]
    },
    {
      component: SkyErrorDemoComponent,
      files: [
        {
          name: 'error-demo.component.html',
          fileContents: require('./error/error-demo.component.html')
        },
        {
          name: 'error-demo.component.ts',
          fileContents: require('./error/error-demo.component.ts')
        }
      ]
    },
    {
      component: SkyFileattachmentsDemoComponent,
      files: [
        {
          name: 'fileattachments-demo.component.html',
          fileContents:
          require('./fileattachments/fileattachments-demo.component.html')
        },
        {
          name: 'fileattachments-demo.component.ts',
          fileContents:
          require('./fileattachments/fileattachments-demo.component.ts')
        }
      ]
    },
    {
      component: SkyFilterDemoComponent,
      files: [
        {
          name: 'filter-demo.component.html',
          fileContents: require('./filter/filter-demo.component.html')
        },
        {
          name: 'filter-demo.component.ts',
          fileContents: require('./filter/filter-demo.component.ts')
        },
        {
          name: 'filter-demo-modal.component.html',
          fileContents: require('./filter/filter-demo-modal.component.html')
        },
        {
          name: 'filter-demo-modal.component.ts',
          fileContents: require('./filter/filter-demo-modal.component.ts')
        },
        {
          name: 'filter-demo-modal-context.ts',
          fileContents: require('./filter/filter-demo-modal-context.ts')
        },
        {
          name: 'filter-inline-demo.component.html',
          fileContents: require('./filter/filter-inline-demo.component.html')
        },
        {
          name: 'filter-inline-demo.component.ts',
          fileContents: require('./filter/filter-inline-demo.component.ts')
        }
      ]
    },
    {
      component: SkyFluidGridDemoComponent,
      files: [
        {
          name: 'fluid-grid.component.html',
          fileContents: require('./fluid-grid/fluid-grid-demo.component.html')
        },
        {
          name: 'fluid-grid-demo.component.ts',
          fileContents: require('./fluid-grid/fluid-grid-demo.component.ts')
        }
      ]
    },
    {
      component: SkyGridDemoComponent,
      files: [
        {
          name: 'grid-demo.component.html',
          fileContents: require('./grid/grid-demo.component.html')
        },
        {
          name: 'grid-demo.component.ts',
          fileContents: require('./grid/grid-demo.component.ts')
        }
      ]
    },
    {
      component: SkyHelpInlineDemoComponent,
      files: [
        {
          name: 'help-inline-demo.component.html',
          fileContents: require('./help-inline/help-inline-demo.component.html')
        },
        {
          name: 'help-inline-demo.component.ts',
          fileContents: require('./help-inline/help-inline-demo.component.ts')
        }
      ]
    },
    {
      component: SkyKeyInfoDemoComponent,
      files: [
        {
          name: 'key-info-demo.component.html',
          fileContents: require('./key-info/key-info-demo.component.html')
        },
        {
          name: 'key-info-demo.component.ts',
          fileContents: require('./key-info/key-info-demo.component.ts')
        }
      ]
    },
    {
      component: SkyLabelDemoComponent,
      files: [
        {
          name: 'label-demo.component.html',
          fileContents: require('./label/label-demo.component.html')
        },
        {
          name: 'label-demo.component.ts',
          fileContents: require('./label/label-demo.component.ts')
        }
      ]
    },
    {
      component: SkyLinkRecordsDemoComponent,
      files: [
        {
          name: 'link-records-demo.component.html',
          fileContents: require('./link-records/link-records-demo.component.html')
        },
        {
          name: 'link-records-demo.component.ts',
          fileContents: require('./link-records/link-records-demo.component.ts'),
          componentName: 'SkyLinkRecordsDemoComponent',
          bootstrapSelector: 'sky-link-records-demo'
        }
      ]
    },
    {
      component: SkyListDemoComponent,
      files: [
        {
          name: 'list-demo.component.html',
          fileContents: require('./list/list-demo.component.html')
        },
        {
          name: 'list-demo.component.ts',
          fileContents: require('./list/list-demo.component.ts')
        },
        {
          name: 'list-provider-demo.component.html',
          fileContents: require('./list/list-provider-demo.component.html')
        },
        {
          name: 'list-provider-demo.component.ts',
          fileContents: require('./list/list-provider-demo.component.ts')
        }
      ]
    },
    {
      component: SkyListFiltersDemoComponent,
      files: [
        {
          name: 'list-filters-demo.component.html',
          fileContents: require('./list-filters/list-filters-demo.component.html')
        },
        {
          name: 'list-filters-demo.component.ts',
          fileContents: require('./list-filters/list-filters-demo.component.ts')
        },
        {
          name: 'list-filters-demo-modal.component.html',
          fileContents:
          require('./list-filters/list-filters-demo-modal.component.html')
        },
        {
          name: 'list-filters-demo-modal.component.ts',
          fileContents: require('./list-filters/list-filters-demo-modal.component.ts')
        },
        {
          name: 'list-filters-inline-demo.component.html',
          fileContents: require('./list-filters/list-filters-inline-demo.component.html')
        },
        {
          name: 'list-filters-inline-demo.component.ts',
          fileContents: require('./list-filters/list-filters-inline-demo.component.ts')
        }
      ]
    },
    {
      component: SkyListPagingDemoComponent,
      files: [
        {
          name: 'list-paging-demo.component.html',
          fileContents: require('./list-paging/list-paging-demo.component.html')
        },
        {
          name: 'list-paging-demo.component.ts',
          fileContents: require('./list-paging/list-paging-demo.component.ts')
        }
      ]
    },
    {
      component: SkyListToolbarDemoComponent,
      files: [
        {
          name: 'list-toolbar-demo.component.html',
          fileContents: require('./list-toolbar/list-toolbar-demo.component.html')
        },
        {
          name: 'list-toolbar-demo.component.ts',
          fileContents: require('./list-toolbar/list-toolbar-demo.component.ts')
        },
        {
          name: 'list-toolbar-demo-custom.component.html',
          fileContents: require('./list-toolbar/list-toolbar-demo-custom.component.html')
        },
        {
          name: 'list-toolbar-demo-custom.component.ts',
          fileContents: require('./list-toolbar/list-toolbar-demo-custom.component.ts')
        }
      ]
    },
    {
      component: SkyListViewChecklistDemoComponent,
      files: [
        {
          name: 'list-view-checklist-demo.component.html',
          fileContents: require('./list-view-checklist/list-view-checklist-demo.component.html')
        },
        {
          name: 'list-view-checklist-demo.component.ts',
          fileContents: require('./list-view-checklist/list-view-checklist-demo.component.ts')
        }
      ]
    },
    {
      component: SkyListViewGridDemoComponent,
      files: [
        {
          name: 'list-view-grid-demo.component.html',
          fileContents: require('./list-view-grid/list-view-grid-demo.component.html')
        },
        {
          name: 'list-view-grid-demo.component.ts',
          fileContents: require('./list-view-grid/list-view-grid-demo.component.ts')
        }
      ]
    },
    {
      component: SkyMediaQueryDemoComponent,
      files: [
        {
          name: 'media-query-demo.component.html',
          fileContents: require('./media-queries/media-query-demo.component.html')
        },
        {
          name: 'media-query-demo.component.ts',
          fileContents: require('./media-queries/media-query-demo.component.ts')
        }
      ]
    },
    {
      component: SkyModalDemoComponent,
      files: [
        {
          name: 'modal-demo.component.html',
          fileContents: require('./modal/modal-demo.component.html')
        },
        {
          name: 'modal-demo.component.ts',
          fileContents: require('./modal/modal-demo.component.ts')
        },
        {
          name: 'modal-demo-form.component.html',
          fileContents: require('./modal/modal-demo-form.component.html')
        },
        {
          name: 'modal-demo-form.component.ts',
          fileContents: require('./modal/modal-demo-form.component.ts')
        },
        {
          name: 'modal-demo-tiled-form.component.html',
          fileContents: require('./modal/modal-demo-tiled-form.component.html')
        },
        {
          name: 'modal-demo-tiled-form.component.ts',
          fileContents: require('./modal/modal-demo-tiled-form.component.ts')
        },
        {
          name: 'modal-demo-context.ts',
          fileContents: require('./modal/modal-demo-context.ts')
        }
      ]
    },
    {
      component: SkyNavbarDemoComponent,
      files: [
        {
          name: 'navbar-demo.component.html',
          fileContents: require('./navbar/navbar-demo.component.html')
        },
        {
          name: 'navbar-demo.component.ts',
          fileContents: require('./navbar/navbar-demo.component.ts')
        }
      ]
    },
    {
      component: SkyNumericDemoComponent,
      files: [
        {
          name: 'numeric-demo.component.html',
          fileContents: require('./numeric/numeric-demo.component.html')
        },
        {
          name: 'numeric-demo.component.ts',
          fileContents: require('./numeric/numeric-demo.component.ts')
        }
      ]
    },
    {
      component: SkyPageSummaryDemoComponent,
      files: [
        {
          name: 'page-summary-demo.component.html',
          fileContents: require('./page-summary/page-summary-demo.component.html')
        },
        {
          name: 'page-summary-demo.component.ts',
          fileContents: require('./page-summary/page-summary-demo.component.ts')
        }
      ]
    },
    {
      component: SkyPagingDemoComponent,
      files: [
        {
          name: 'paging-demo.component.html',
          fileContents: require('./paging/paging-demo.component.html')
        },
        {
          name: 'paging-demo.component.ts',
          fileContents: require('./paging/paging-demo.component.ts')
        }
      ]
    },
    {
      component: SkyPopoverDemoComponent,
      files: [
        {
          name: 'popover-demo.component.html',
          fileContents: require('./popover/popover-demo.component.html')
        },
        {
          name: 'popover-demo.component.ts',
          fileContents: require('./popover/popover-demo.component.ts')
        }
      ]
    },
    {
      component: SkyRadioDemoComponent,
      files: [
        {
          name: 'radio-demo.component.html',
          fileContents: require('./radio/radio-demo.component.html')
        },
        {
          name: 'radio-demo.component.ts',
          fileContents: require('./radio/radio-demo.component.ts')
        }
      ]
    },
    {
      component: SkyRepeaterDemoComponent,
      files: [
        {
          name: 'repeater-demo.component.html',
          fileContents: require('./repeater/repeater-demo.component.html')
        },
        {
          name: 'repeater-demo.component.ts',
          fileContents: require('./repeater/repeater-demo.component.ts')
        }
      ]
    },
    {
      component: SkySearchDemoComponent,
      files: [
        {
          name: 'search-demo.component.html',
          fileContents: require('./search/search-demo.component.html')
        },
        {
          name: 'search-demo.component.ts',
          fileContents: require('./search/search-demo.component.ts')
        }
      ]
    },
    {
      component: SkySectionedFormDemoComponent,
      files: [
        {
          name: 'sectioned-form-demo.component.html',
          fileContents: require('./sectioned-form/sectioned-form-demo.component.html')
        },
        {
          name: 'sectioned-form-demo.component.ts',
          fileContents: require('./sectioned-form/sectioned-form-demo.component.ts')
        },
        {
          name: 'sectioned-modal-form-demo.component.html',
          fileContents: require('./sectioned-form/sectioned-modal-form-demo.component.html')
        },
        {
          name: 'sectioned-modal-form-demo.component.ts',
          fileContents: require('./sectioned-form/sectioned-modal-form-demo.component.ts')
        },
        {
          name: 'demo-address-form.component.html',
          fileContents: require('./sectioned-form/demo-address-form.component.html')
        },
        {
          name: 'demo-address-form.component.ts',
          fileContents: require('./sectioned-form/demo-address-form.component.ts')
        },
        {
          name: 'demo-information-form.component.html',
          fileContents: require('./sectioned-form/demo-information-form.component.html')
        },
        {
          name: 'demo-information-form.component.ts',
          fileContents: require('./sectioned-form/demo-information-form.component.ts')
        },
        {
          name: 'demo-phone-form.component.html',
          fileContents: require('./sectioned-form/demo-phone-form.component.html')
        },
        {
          name: 'demo-phone-form.component.ts',
          fileContents: require('./sectioned-form/demo-phone-form.component.ts')
        }
      ]
    },
    {
      component: SkySortDemoComponent,
      files: [
        {
          name: 'sort-demo.component.html',
          fileContents: require('./sort/sort-demo.component.html')
        },
        {
          name: 'sort-demo.component.ts',
          fileContents: require('./sort/sort-demo.component.ts')
        }
      ]
    },
    {
      component: SkyTabsDemoComponent,
      files: [
        {
          name: 'tabs-demo.component.html',
          fileContents: require('./tabs/tabs-demo.component.html')
        },
        {
          name: 'tabs-demo.component.ts',
          fileContents: require('./tabs/tabs-demo.component.ts')
        }
      ]
    },
    {
      component: SkyTextExpandDemoComponent,
      files: [
        {
          name: 'text-expand-demo.component.html',
          fileContents: require('./text-expand/text-expand-demo.component.html')
        },
        {
          name: 'tabs-demo.component.ts',
          fileContents: require('./text-expand/text-expand-demo.component.ts')
        }
      ]
    },
    {
      component: SkyTextHighlightDemoComponent,
      files: [
        {
          name: 'text-highlight-demo.component.html',
          fileContents: require('./text-highlight/text-highlight-demo.component.html')
        },
        {
          name: 'text-highlight-demo.component.ts',
          fileContents: require('./text-highlight/text-highlight-demo.component.ts')
        }
      ]
    },
    {
      component: SkyTilesDemoComponent,
      files: [
        {
          name: 'tiles-demo.component.html',
          fileContents: require('./tile/tiles-demo.component.html')
        },
        {
          name: 'tiles-demo.component.ts',
          fileContents: require('./tile/tiles-demo.component.ts')
        },
        {
          name: 'tiles-demo-tile1.component.html',
          fileContents: require('./tile/tiles-demo-tile1.component.html')
        },
        {
          name: 'tiles-demo-tile1.component.ts',
          fileContents: require('./tile/tiles-demo-tile1.component.ts')
        },
        {
          name: 'tiles-demo-tile2.component.html',
          fileContents: require('./tile/tiles-demo-tile2.component.html')
        },
        {
          name: 'tiles-demo-tile2.component.ts',
          fileContents: require('./tile/tiles-demo-tile2.component.ts')
        }
      ]
    },
    {
      component: SkyTimePickerDemoComponent,
      files: [
        {
          name: 'timepicker-demo.component.html',
          fileContents: require('./timepicker/timepicker-demo.component.html')
        },
        {
          name: 'timepicker-demo.component.ts',
          fileContents: require('./timepicker/timepicker-demo.component.ts')
        }
      ]
    },
    {
      component: SkyToolbarDemoComponent,
      files: [
        {
          name: 'toolbar-demo.component.html',
          fileContents: require('./toolbar/toolbar-demo.component.html')
        },
        {
          name: 'toolbar-demo.component.ts',
          fileContents: require('./toolbar/toolbar-demo.component.ts')
        }
      ]
    },
    {
      component: SkyUrlValidationDemoComponent,
      files: [
        {
          name: 'url-validation-demo.component.html',
          fileContents: require('./url-validation/url-validation-demo.component.html')
        },
        {
          name: 'url-validation.component.ts',
          fileContents: require('./url-validation/url-validation-demo.component.ts')
        }
      ]
    },
    {
      component: SkyVerticalTabsDemoComponent,
      files: [
        {
          name: 'vertical-tabs-demo.component.html',
          fileContents: require('./vertical-tabs/vertical-tabs-demo.component.html')
        },
        {
          name: 'vertical-tabs-demo.component.ts',
          fileContents: require('./vertical-tabs/vertical-tabs-demo.component.ts')
        }
      ]
    },
    {
      component: SkyWaitDemoComponent,
      files: [
        {
          name: 'wait-demo.component.html',
          fileContents: require('./wait/wait-demo.component.html')
        },
        {
          name: 'wait-demo.component.ts',
          fileContents: require('./wait/wait-demo.component.ts')
        }
      ]
    },
    {
      component: SkyWizardDemoComponent,
      files: [
        {
          name: 'wizard-demo.component.html',
          fileContents: require('./wizard/wizard-demo.component.html')
        },
        {
          name: 'wizard-demo.component.ts',
          fileContents: require('./wizard/wizard-demo.component.ts')
        },
        {
          name: 'wizard-demo-form.component.html',
          fileContents: require('./wizard/wizard-demo-form.component.html')
        },
        {
          name: 'wizard-demo-form.component.ts',
          fileContents: require('./wizard/wizard-demo-form.component.ts')
        }
      ]
    }
  ];

  public getComponent(name: string): any {
    const found = this.components.filter((component: any) => {
      return component.component.name === name;
    });

    if (found.length > 0) {
      return found[0];
    }
  }
}