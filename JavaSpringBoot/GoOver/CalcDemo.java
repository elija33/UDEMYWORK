public class CalcDemo {
    public static void main(String[] args) {
        Calc total = new Calc();
        int adding = total.add(4, 0);
        int subs = total.sub(4, 3);

        System.out.println(adding + " " + subs);
    }
}
