/**
 * main
 */
public class main {

    static int a = 10;
    static //Static Block
    {
        System.out.println("Static Block");
        System.out.println(a);
    }
    { //Instance Block
        System.out.println("Instance Block");
    }
    public static void main(String[] args) {
        main obj = new main();
    }
}