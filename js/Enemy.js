class Enemy extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      
      this.body = null
    }
  
   display(){
     if(this.body.speed < 3)
     {
      super.display();
     }

     this.body.addAnimation("walking",enemyAnimation);

    }

  };