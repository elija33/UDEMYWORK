public class AdvCalcDemo {
    public static void main(String[] args) {
        AdvCalc advtotla = new AdvCalc();
        int advadd = advtotla.add(5, 10);
        int advsub = advtotla.sub(20, 5);
        int advmuti = advtotla.multi(5, 3);
        int advdiv = advtotla.div(10, 2);
        System.out.println(advadd + " " + advsub + " " + advmuti + " " + advdiv);
    }
}
