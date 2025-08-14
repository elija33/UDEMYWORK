package FirstJavaCode;

public class RandomMultiDimensionArray {
    public static void main(String[] args) {
        int number[][] = new int[4][5];
        for(int i = 0; i<4; i++){ // this row
            for(int j = 0; j < 5; j++){ // this column
                number[i][j] = (int)(Math.random() * 10);
            }
        }
        for(int i = 0; i< 4; i++){
            for(int j = 0; j<5; j++){
                System.out.print(number[i][j] + " ");
            }
            System.out.println();
        }
    }
}
