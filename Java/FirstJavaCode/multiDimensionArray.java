package FirstJavaCode;

public class multiDimensionArray {
    public static void main(String[] args) {
        int number[][] = new int[3][4];

        for(int i = 0; i<3; i++) {
            for(int j = 0; j<4; j++){
                System.out.print(number[i][j] + " ");
            }
            System.out.println();
        }
    }
}
