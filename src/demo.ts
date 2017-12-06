import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkyModule } from './core';

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
  SkyFilterInlineDemoComponent,
  SkyFluidGridDemoComponent,
  SkyGridDemoComponent,
  SkyHelpInlineDemoComponent,
  SkyKeyInfoDemoComponent,
  SkyLabelDemoComponent,
  SkyLinkRecordsDemoComponent,
  SkyListDemoComponent,
  SkyListProviderDemoComponent,
  SkyListFiltersDemoComponent,
  SkyListFiltersInlineDemoComponent,
  SkyListPagingDemoComponent,
  SkyListToolbarDemoComponent,
  SkyListToolbarDemoCustomComponent,
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
  SkyDemoAddressFormComponent,
  SkyDemoInformationFormComponent,
  SkyDemoPhoneFormComponent,
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
} from './demos';

// Entry components
import {
  SkyFilterDemoModalComponent,
  SkyListFiltersModalDemoComponent,
  SkyModalDemoFormComponent,
  SkyModalDemoTiledFormComponent,
  SkySectionedModalFormDemoComponent,
  SkyTilesDemoTile1Component,
  SkyTilesDemoTile2Component,
  SkyWizardDemoFormComponent
} from './demos';

import {
  SkyDemoService
} from './demos';

const components = [
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
  SkyFilterInlineDemoComponent,
  SkyFluidGridDemoComponent,
  SkyGridDemoComponent,
  SkyHelpInlineDemoComponent,
  SkyKeyInfoDemoComponent,
  SkyLabelDemoComponent,
  SkyLinkRecordsDemoComponent,
  SkyListDemoComponent,
  SkyListProviderDemoComponent,
  SkyListFiltersDemoComponent,
  SkyListFiltersInlineDemoComponent,
  SkyListPagingDemoComponent,
  SkyListToolbarDemoComponent,
  SkyListToolbarDemoCustomComponent,
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
  SkyDemoAddressFormComponent,
  SkyDemoInformationFormComponent,
  SkyDemoPhoneFormComponent,

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
  SkyWizardDemoComponent,
  SkyFilterDemoModalComponent,
  SkyListFiltersModalDemoComponent,
  SkyModalDemoFormComponent,
  SkyModalDemoTiledFormComponent,
  SkySectionedModalFormDemoComponent,
  SkyTilesDemoTile1Component,
  SkyTilesDemoTile2Component,
  SkyWizardDemoFormComponent
];

@NgModule({
  declarations: components,
  providers: [SkyDemoService],
  imports: [
    CommonModule,
    FormsModule,
    SkyModule
  ],
  exports: components,
  entryComponents: [
    SkyFilterDemoModalComponent,
    SkyListFiltersModalDemoComponent,
    SkyModalDemoFormComponent,
    SkyModalDemoTiledFormComponent,
    SkySectionedModalFormDemoComponent,
    SkyTilesDemoTile1Component,
    SkyTilesDemoTile2Component,
    SkyWizardDemoFormComponent
  ]
})
export class SkyDemoModule { }

export * from './demos';
