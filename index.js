//���������ɣ�����ֵ
function main(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d'); 
	ctx.fillStyle="#FFFFFF";
    ctx.fillRect(150,10,400,500);
    ctx.lineWidth = 5;
	let a=[];
    let x = [150,250,350,450,550],y = [10,110,210,310,410,510];
	let timing=document.getElementById("time");
    let counter=document.getElementById("score");
	let timer,time;
    let score=0;
	let keep = false,unture=false;judge=false;
//��
    for(let i=0;i<7;i++){
        ctx.beginPath();
        ctx.moveTo(x[0],y[i]);
        ctx.lineTo(x[4],y[i]);
        ctx.closePath();
        ctx.stroke();
    }
    
//��
    for(let i=0;i<5;i++){
        ctx.beginPath();
        ctx.moveTo(x[i],y[0]);
        ctx.lineTo(x[i],y[5]);
        ctx.closePath();
        ctx.stroke();
    }
	//���������һ����
	function ran(){
		return Math.floor(Math.random()*4)}
	
	
//�˴����Ϳ��

    function beblack(){
        for(let i=0;i<5;i++){
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(x[a[i]]+1, y[i]+1, 100, 100);
        }
        for(let i=0;i<5;i++){
            a[i]=ran();
            ctx.fillStyle="#1b1b1b";
            ctx.fillRect(x[a[i]]+1, y[i]+1, 100, 100);
        }  
     }
    beblack();
 

	//���ϳ�ʼ����滭��ϣ��˴�Ϊ��Ϸ�߼�,����judge�����жϲ����Դ�,keep���ڼ���ʱ���Ƿ��㹻,untrue�����жϴ�����

	window.addEventListener("keydown",keydown);
    function keydown(click1){
        let b=["KeyA","KeyS","KeyD","KeyF"];
        if(click1.code=="KeyR"){
            window.location.reload();
            return;
        }
        if(keep==false&&unture==false){
            time = 30;
            keep = true;
            timer = setInterval(function(){
                time=time-0.01;
                time=Math.round(time*100)/100
                timing.innerHTML="<h4>YOU HAVE "+time+" SECOND</h4>"
                if(time<0){
                    timing.innerHTML="<h4>time is up</h4>";
                    alert("YOUR SCOURE IS"+score);
                    clearInterval(timer);
					keep = false,unture = true;
                }
            }, 100)
            return;
        }
        
		//�Ƿ���ȷ���
		if(keep&&b[a[4]]==click1.code){
            judge=true;
        }else{
            judge=false;
        }
		
		//�ɹ����һ����Ϸ,�ƶ�ɫ�鲢���»���,���߳����
        if(judge&&keep){
            score++;
            counter.innerHTML="<h4>score:"+score;
            for(let i=0;i<5;i++){
                ctx.fillStyle="#FFFFFF";
                ctx.fillRect(x[a[i]]+1, y[i]+1, 100, 100);
            }
            for(let i=4;i>=1;i--){
                a[i]=a[i-1];
                ctx.fillStyle="#1b1b1b";
                ctx.fillRect(x[a[i]]+1, y[i]+1, 100, 100);
            }
 
            a[0]=ran();
            ctx.fillStyle="#1b1b1b";
            ctx.fillRect(x[a[0]]+1, y[0]+1, 100, 100);
			
//��
    for(let i=0;i<6;i++){
        ctx.beginPath();
        ctx.moveTo(x[0],y[i]);
        ctx.lineTo(x[4],y[i]);
        ctx.closePath();
        ctx.stroke();
    }
    
//��
    for(let i=0;i<5;i++){
        ctx.beginPath();
        ctx.moveTo(x[i],y[0]);
        ctx.lineTo(x[i],y[5]);
        ctx.closePath();
        ctx.stroke();
    }
		}
		else if(keep){
            alert("wrong!your score is"+score);
            clearInterval(timer);
            keep = false,unture = true;
        }
    }
}