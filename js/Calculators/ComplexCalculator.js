class ComplexCalculator extends RealCalculator {
    add(a, b) {
        return new Complex(a.re + b.re, a.im + b.im);
    }
    sub(a, b) {
        return new Complex(a.re - b.re, a.im - b.im);
    }
    mult(a, b) {
        return new Complex(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
    }
    /*
    procedure Inv(z : complex; Var w : complex);
    Var q:real;
    begin
    q:=sqr(z.Re)+sqr(z.Im);
    w.Re := z.Re/q;
    w.Im := z.Im/q;
    end;

    procedure Divz(u,v : complex; Var w : complex);
    Var z:Complex;
    begin
    Inv(v,z);
    Mult(u,z,w);
    end;
    */
    inv(z) {
        let w = new Complex(this.one());
        let q = Math.pow(z.re, 2) + Math.pow(z.im, 2);
        w.re = z.re / q;
        w.im = z.im / q;
        return new Complex(w.re, w.im);
    }
    div(a, b) {
        let z = new Complex(this.one());
        z = this.inv(b);
        let w = new Complex(this.one());
        w = this.mult(a, z);
        return new Complex(w.re, w.im);
    }

    prod(a, p) {
        return new Complex(a.re * p, a.im * p);
    }
    pow(a, n) {
        let s = this.one();
        for (let i = 0; i < n; i++) {
            s = this.mult(s, a);
        }
        return s;
    }
    one() {
        return new Complex(super.one());
    }
    zero() {
        return new Complex;
    }
}