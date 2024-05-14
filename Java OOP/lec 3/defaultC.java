class A
{
    int a; String b;  boolean c;
    A(){

    }
    void display(){
        System.out.println(a+" "+b+" "+c);
    }
}
public class defaultC {
    public static void main(String[] args) {
        A obj;
        obj = new A();
        obj.display();
    }
}
