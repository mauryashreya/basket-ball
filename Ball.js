class Ball {
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restritution:0.3,
            friction:0.5,
            density:1.15

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
    }
    display()
    {
        var ballpos=this.body.position;
        
        push()
        translate(ballpos.x,ballpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("#ee6730")
        ellipse(0,0,this.r,this.r);
        //ellipse(CENTER);
        pop()
    }
}