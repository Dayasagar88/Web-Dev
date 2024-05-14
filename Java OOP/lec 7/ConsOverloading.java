class A
{
    int a; double b; String c;
    A()
    {
        a = 10; b = 10.20; c = "Constructor Overloading";
        System.out.println(a+" "+b+" "+c);
    }
    A(int x)
    {
        a = x;
        System.out.println(a);
    }
    A(int x , double y)
    {
        a = x; b = y;
        System.out.println(a+" "+b);
    }
}

public class ConsOverloading {
    public static void main(String[] args) {
        A obj = new A();
        A obj2 = new A(30);
        A obj3 = new A(20, 30.58);
        System.out.println(obj.a+" "+obj.b+" "+obj.c);
        System.out.println(obj2.a);
        System.out.println(obj3.a+" "+obj3.b);
    }
    
}
