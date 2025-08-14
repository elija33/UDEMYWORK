package Map;

import java.util.HashMap;
import java.util.Map;

public class Dome {
    public static void main(String[] args) {
        Map<String, Integer> student = new HashMap<>();
        student.put("Elija", 5);
        student.put("Ruth", 1);
        student.put("James", 3);
        student.put("Rive", 2);
        System.out.println(student);
        System.out.println(student.keySet());
    }
}
