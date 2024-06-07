interface Animal{
   public void eat();
   public void travel();
}

class Dog implements Animal{
@Override
 public void eat(){System.out.print("The dog eats");}

@Override
public void travel() {
   System.out.println("The dog moves from bed to couch");
}
}

class Test{  
    public static void main(String arg[]){

    }
}

