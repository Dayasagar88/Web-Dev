class A
{
    int a,b;
    A(){
        a = 10; b = 20;
        System.out.println(a+b);
    }
    A(A obj)
    {
        a = obj.a;
        b = obj.b;
        System.out.println(a+" "+b);
        System.out.println("Copy Constructor");
    }
}
public class CopyC {
    public static void main(String[] args) {
        A obj = new A();
        A obj2 = new A(obj);//Copy Constructor called
    }
}

