import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MonolithicAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MonolithicAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MonolithicAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonolithicAppSharedModule {
  static forRoot() {
    return {
      ngModule: MonolithicAppSharedModule
    };
  }
}
