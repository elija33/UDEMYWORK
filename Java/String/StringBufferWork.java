package String;
public class StringBufferWork {
    public static void main(String[] args) {
        StringBuffer name = new StringBuffer("James");
        System.out.println(name.capacity());
        // the leght of the stringBuffer
        System.out.println(name.length());

        // Adding element to a Stringbuffer
        name.append(" Elija");
        System.out.println(name);

        // Converting StringBuffer to String Using toString
        String word = name.toString();
        System.out.println(word);
    }
}
