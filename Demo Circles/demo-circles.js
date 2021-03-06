class Circle {
    constructor(x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    renderRect(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.rect(this.x,this.y,this.radius,this.radius);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    renderImg(){
        let pen = canvas.getContext('2d');
        let img = new Image();
        img.src = 'oggy.png';
        pen.drawImage(img, this.x, this.y,this.radius,this.radius);
        pen.closePath();
    }
}