//���������ɣ�����ֵ
function main(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d'); 
    let timing=document.getElementById("time");
    let counter=document.getElementById("score");
    let x = [150,250,350,450,550];
    let y = [10,110,210,310,410,510];
	let timer,time;
    let score=0;
	let keep = false,unture=false;judge=false;
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(150,10,400,500);
    ctx.lineWidth = 5;
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
	
//�˴����Ϳ��
    let a=[];
    function beblack(){
        for(let i=0;i<5;i++){
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(x[a[i]]+1, y[i]+1, 100, 100);
        }
        for(let i=0;i<5;i++){
            a[i]=Math.floor(Math.random()*4);
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
                time=time-0.1;
                time=Math.round(time*10)/10
                timing.innerHTML="<h4>YOU HAVE"+time+"SECOND</h4>"
                if(time<0){
                    alert("YOUR SCOURE IS"+score);
                    clearInterval(timer);
                    timing.innerHTML="<h4>time is up</h4>";
                    keep = false;
                    unture = true;
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
		
		//�ɹ����һ����Ϸ,�ƶ�ɫ��,���߳����
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
 
            a[0]=Math.floor(Math.random()*4);
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
            keep = false;
            unture = true;
        }
    }
}