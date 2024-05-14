abstract class animal
{
    animal()
    {
        System.out.println("All Animal Class..........");
    }
    abstract public void sound();
}
class dog extends animal
{
    dog()
    {
        super();
    }
    public void sound(){
        System.out.println("Dog is barking");
    }
}
class lion extends animal
{
    lion()
    {
        super();
    }
    public void sound()
    {
        System.out.println("Lion is roaring");
    }
}

public class abstractClass {
    public static void main(String[] args) {
        dog d = new dog();
        d.sound();
        lion l = new lion();
        l.sound();
    }
}
