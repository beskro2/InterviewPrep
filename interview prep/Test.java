class Animal{
    Animal(){System.out.print("Animal was created");}
     void eat(){
        System.out.println("THe animal eats");
     }
}
class Dog extends Animal{
    
    Dog(){
        super();
        System.out.println("a dog has bin created");
    }
    void eat(){System.out.println("the dog eats only cibble");}
    void bark(){System.out.println("the dog barks");}
   void work(){
    super.eat();
    bark();
}
}

class Test{  
    public static void main(String arg[]){
Dog dog = new Dog();
dog.bark();
dog.eat();
dog.work();
    }
}

