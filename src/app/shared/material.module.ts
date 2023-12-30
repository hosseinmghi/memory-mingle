import { NgModule } from "@angular/core";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [MatSelectModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
    exports: [MatSelectModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule]
})
export class MaterialModule { }