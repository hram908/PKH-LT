package pkh.form.materials;

import pkh.form.materials.abschnitte.a.FormA;
import pkh.form.materials.abschnitte.b.FormB;
import pkh.form.materials.abschnitte.c.FormC;
import pkh.form.materials.abschnitte.d.FormD;
import pkh.form.materials.abschnitte.e.FormE;
import pkh.form.materials.abschnitte.f.FormF;
import pkh.form.materials.abschnitte.g.FormG;
import pkh.form.materials.abschnitte.h.FormH;
import pkh.form.materials.abschnitte.i.FormI;
import pkh.form.materials.abschnitte.j.FormJ;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Isabella
 */
public class PkhFormular {
    private long id;
    private FormA formA;
    private FormB formB;
    private FormC formC;
    private FormD formD;
    private FormE formE;
    private FormF formF;
    private FormG formG;
    private FormH formH;
    private FormI formI;
    private FormJ formJ;

    public PkhFormular(long id, FormA formA, FormB formB, FormC formC, FormD formD, FormE formE, FormF formF, FormG formG, FormH formH, FormI formI, FormJ formJ) {
        this.id = id;
        this.formA = formA;
        this.formB = formB;
        this.formC = formC;
        this.formD = formD;
        this.formE = formE;
        this.formF = formF;
        this.formG = formG;
        this.formH = formH;
        this.formI = formI;
        this.formJ = formJ;
    }

    public long getId() {
        return id;
    }

    public FormA getFormA() {
        return formA;
    }

    public FormB getFormB() {
        return formB;
    }

    public FormC getFormC() {
        return formC;
    }

    public FormD getFormD() {
        return formD;
    }

    public FormE getFormE() {
        return formE;
    }

    public FormF getFormF() {
        return formF;
    }

    public FormG getFormG() {
        return formG;
    }

    public FormH getFormH() {
        return formH;
    }

    public FormI getFormI() {
        return formI;
    }

    public FormJ getFormJ() {
        return formJ;
    }
}
