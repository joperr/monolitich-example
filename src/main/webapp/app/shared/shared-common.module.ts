import { NgModule } from '@angular/core';

import { MonolithicAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MonolithicAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MonolithicAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MonolithicAppSharedCommonModule {}
