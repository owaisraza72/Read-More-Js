  let text = "The Pakistan Army is the land-based military force of Pakistan and serves as a vital pillar of the country’s defense and sovereignty. Established in 1947 following the independence of Pakistan, the army has played a crucial role in safeguarding the nation’s borders, maintaining internal stability, and contributing to national development. Comprising highly trained soldiers, officers, and specialized units, the Pakistan Army is renowned for its discipline, strategic capabilities, and resilience in facing regional and global challenges. It operates under the Ministry of Defence and is led by the Chief of Army Staff, who is responsible for ensuring readiness and operational effectiveness. The army’s primary mission includes defending Pakistan’s territorial integrity against external threats, such as India, with whom Pakistan shares a complex and historically tense relationship. Beyond conventional warfare, the Pakistan Army is also actively involved in counter-terrorism operations, disaster relief efforts, and peacekeeping missions across the world under the United Nations banner."

        let show = document.getElementById('show');
        let btn = document.getElementById('btn');

        let index = 200;
        let flag = false;
        if (text.length <= index) {

            show.innerText = text;

        } else {
            show.innerText = `${text.slice(0, index)}`;
            console.log(index)

        }

        function send() {

            if (flag) {
                index = 200;
                show.innerText = `${text.slice(0, index)}`;
                btn.innerText = 'show more';
                flag = false;
            } else {
                index += 200;
                show.innerText = `${text.slice(0, index)}`;
                console.log(index)

                if (index >= text.length) {
                    show.innerText = `${text.slice(0, index)}`;
                    btn.innerText = 'show less'
                    flag = true;
                } else {

                    show.innerText = `${text.slice(0, index)}`;

                }
            }



        }



        //  function send()    {
        //                     showmsg(text);

        //  }

        //                     function showmsg(a){
        // console.log("Total:" + a.length)
        //                     if(a.length>300){
        //              show.innerHTML=`<p>${a.slice(0,300)}...<button onclick="more()">Read More</button></p>`

        //                             }

        //                              else { show.innerHTML=`<p>${a}</p>`
        //                               }



        // }



        //                     function more(){


        //                               if(text.length>300){
        //              show.innerHTML=`<p>${text.slice(0,600)}...<button onclick="ok()">Read More</button></p>`

        //                              }
        //                             }




        //                             function ok(){
        //                               if(text.length > 300){
        //                               show.innerHTML=`<p>${text}</p>Thanks`
        //                               }
        //                                         }




