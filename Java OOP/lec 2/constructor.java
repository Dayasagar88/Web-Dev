//Constructor
class A {
    int a; String b;
    // A(){
    //     a = 24; b = "Sagar";// Java has a default constructor
    // }
    void show(){
        System.out.println(a+" "+b);
    }
}
public class constructor {
    public static void main(String[] args) {
        A obj = new A();
        obj.show();
    }
}
