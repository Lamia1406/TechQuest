export default function TreeDisc({active, level}) {
    const Color = () => {
        if (active) {
            return "#2A1B0D"
        }
        else {
            return "#37454E99"
        }
    }
    

   
    return <div className={`flex items-center gap-3 level absolute -top-10 -left-6  w-fit`}>
        <p className="absolute left-6 w-12 h-12 p-2 rounded-[50px] flex justify-center items-center bg-[#2A1B0D] text-white text-lg">
            {level}
        </p>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.089 0.0638504C51.7445 0.132744 50.4768 0.187859 49.2643 0.187859C47.8037 0.201637 46.4396 0.298088 45.1995 0.49099C43.2429 0.78035 43.1189 0.807907 40.7765 1.02837C39.0541 1.19372 35.3889 2.07557 34.3142 2.58539C32.9501 3.21922 32.1096 3.50857 31.2002 3.63258C30.5663 3.72903 30.1667 3.8806 29.7947 4.15618C29.5191 4.37664 28.9955 4.72112 28.6373 4.9278C28.279 5.13448 27.9621 5.41006 27.9208 5.54784C27.7692 6.00255 26.7496 6.45725 25.8402 6.48481C25.2615 6.49859 24.793 6.60882 24.2556 6.87062C23.2911 7.3391 21.6789 8.30363 21.0313 8.79967C20.7558 9.00635 20.1219 9.2957 19.6259 9.43349C18.5374 9.72285 18 10.2051 17.3937 11.3625C16.8977 12.3271 15.7402 13.7049 15.4095 13.7049C15.2855 13.7049 14.8308 14.0908 14.3761 14.5592C11.7444 17.3839 9.89799 19.1752 9.07126 19.7125C8.23075 20.2499 8.12051 20.3877 7.65203 21.3798C7.37645 21.9723 6.88041 22.9781 6.54972 23.6257C5.75054 25.1965 5.5163 26.0646 5.5163 27.4563C5.5163 28.7239 5.62653 28.531 4.37266 29.5782C3.91795 29.964 3.24279 31.7002 2.89831 33.4088C2.73297 34.2079 2.45739 34.9658 2.01646 35.7925C1.64443 36.509 1.38264 37.1842 1.38264 37.446C1.38264 37.694 1.28618 38.3967 1.17595 39.0305C1.03816 39.8297 1.01061 40.6978 1.05194 41.993L1.13462 43.8118L0.569682 44.8866C-0.0641474 46.0991 -0.146821 46.7743 0.21143 48.1384C0.418114 48.9376 0.721249 51.2524 0.735028 52.2169C0.735028 52.5201 0.666134 53.2228 0.569682 53.7877C0.349219 55.0278 0.418114 55.4825 1.09328 57.5907C1.72711 59.5198 2.19559 61.8622 2.34716 63.7912C2.42983 64.9073 2.55384 65.4447 2.99477 66.6159C3.2979 67.4151 3.6286 68.3245 3.71127 68.6414C3.79394 68.9721 4.09708 69.4957 4.38643 69.8264C5.61276 71.2869 6.31548 72.3755 6.24658 72.7337C6.19147 73.0231 6.37059 73.34 7.22489 74.3872C7.8036 75.0899 8.43743 76.0406 8.63033 76.4816C9.31928 78.0661 9.45707 78.259 10.4491 79.2511C10.9865 79.8023 11.4412 80.3121 11.4412 80.381C11.4412 80.8357 12.3231 81.938 14.2659 83.9084C14.8033 84.4458 15.63 85.3414 16.1123 85.8926C16.7737 86.6366 17.4488 87.1878 18.7992 88.0696C19.7912 88.7172 20.8246 89.4613 21.0864 89.7093C21.3482 89.9573 22.1199 90.4671 22.795 90.853C23.4702 91.2388 24.4623 91.8864 24.9997 92.2997C26.0055 93.0714 27.4385 93.8981 27.783 93.8981C28.2653 93.8981 30.4148 95.1933 31.0348 95.8547C31.6411 96.5023 31.71 96.5436 32.206 96.461C33.8733 96.1992 33.8181 96.1992 35.8436 96.7917C36.9322 97.1223 38.0758 97.5082 38.379 97.6597C39.7293 98.3349 40.3769 98.4727 42.7882 98.5829C44.4554 98.6518 45.3097 98.762 45.7507 98.9274C47.597 99.6301 47.9002 99.6577 50.9453 99.5612C53.2464 99.4923 53.9078 99.4234 54.2798 99.2305C54.638 99.0514 54.955 99.0101 55.5888 99.0789C56.1675 99.1341 56.8151 99.0652 57.6694 98.886C58.7028 98.6656 59.0611 98.6518 59.8327 98.762C60.7008 98.8998 60.811 98.8723 61.6239 98.5278C62.1062 98.3073 62.9192 97.894 63.429 97.577C64.0077 97.2464 64.9998 96.8468 65.9781 96.5574C66.8737 96.2956 67.9347 95.8685 68.3618 95.6067C69.0094 95.2209 69.2712 95.1382 69.9464 95.1382C70.9385 95.1382 71.6688 94.8213 72.8124 93.9119C73.2671 93.5398 74.2179 92.8096 74.9068 92.2997C75.6095 91.7761 76.5603 90.9907 77.0425 90.5498C78.5031 89.2133 80.8317 87.5736 81.4104 87.4909C83.1879 87.2153 84.1662 86.5677 85.1445 85.0245C85.4476 84.5422 86.0815 83.7706 86.5637 83.3159C87.046 82.875 87.9141 82.0482 88.4928 81.4971C89.6227 80.4361 89.912 79.9676 90.1049 78.948C90.1876 78.5346 90.4769 77.9421 90.9179 77.3083C91.7033 76.1922 93.467 72.7475 93.7012 71.8794C93.7839 71.5625 94.2386 70.5704 94.7208 69.6748C95.8094 67.6631 96.2641 66.4919 96.3881 65.4722C96.4432 65.0451 96.5948 64.549 96.7326 64.3699C97.1873 63.7912 97.3251 63.3778 97.4215 62.4133C97.5042 61.5315 97.5869 61.3386 98.2896 60.2914C98.7167 59.6575 99.1163 58.9135 99.1576 58.6517C99.2128 58.3899 99.2128 57.3151 99.1576 56.2817C99.0888 55.1243 99.1163 54.0633 99.199 53.5673C99.2817 53.1264 99.5021 51.8725 99.7088 50.7702C100.191 48.1384 100.15 47.7664 99.0061 43.674C98.7305 42.682 98.3309 41.4143 98.1105 40.8494C97.8486 40.1604 97.6971 39.4577 97.6557 38.7136C97.6006 37.8869 97.4215 37.1566 96.953 35.8063C96.6223 34.8142 96.1814 33.4501 95.9885 32.7612C95.5062 31.0664 94.8173 29.4542 94.1146 28.4346C93.6461 27.7456 93.4945 27.346 93.2878 26.3264C92.9571 24.6867 92.8745 24.4938 92.1304 23.5844C91.7859 23.171 91.2899 22.3719 91.0143 21.8345C90.6561 21.118 90.2289 20.5668 89.416 19.7952C88.8097 19.2165 88.0381 18.3347 87.7074 17.8386C86.2468 15.6891 84.8414 14.3801 81.6447 12.1617C81.2313 11.8724 80.7353 11.4177 80.5286 11.1559C80.3219 10.8803 79.5641 10.2189 78.8338 9.68151C77.3594 8.5792 76.0504 7.31155 75.4855 6.44347C75.2788 6.12656 74.9481 5.75453 74.7552 5.63052C74.2868 5.32738 72.7022 4.88646 72.0683 4.88646C71.3243 4.88646 69.9464 4.29397 68.8441 3.49479C67.7004 2.65428 66.9288 2.28225 66.3501 2.26847C66.1296 2.26847 65.5647 2.17202 65.11 2.06178C64.6553 1.93777 63.7597 1.79999 63.1121 1.73109C62.2853 1.63464 61.6791 1.48307 61.0452 1.17994C60.5492 0.945694 59.7776 0.67012 59.3229 0.546112C57.9863 0.187859 53.1224 -0.142838 52.089 0.0638504ZM51.2071 5.03802C51.7169 5.27227 52.3232 5.36872 53.7424 5.45139C54.7621 5.52029 55.7266 5.60296 55.8781 5.63052C56.0297 5.67185 56.5533 5.64429 57.0494 5.5754C58.1792 5.41006 59.8465 5.76831 61.3346 6.47103C62.0235 6.80173 62.6436 6.98085 63.2499 7.03596C64.4348 7.14619 66.2537 7.68357 67.5213 8.31741C68.0863 8.60676 68.8716 8.95123 69.2437 9.08902C69.6295 9.22681 70.0291 9.41972 70.1393 9.51617C70.2495 9.61262 71.0349 10.0673 71.8617 10.5358C73.5014 11.4728 75.1824 12.6026 76.1607 13.4569C76.5051 13.7463 77.2354 14.2974 77.7866 14.6695C78.448 15.1104 78.82 15.4549 78.8751 15.6891C78.9165 15.882 79.3298 16.4332 79.7845 16.9154C81.2175 18.4587 81.5896 19.7125 81.0246 21.1593C80.8593 21.5451 80.7628 21.9034 80.8042 21.9309C80.8455 21.9723 81.0797 21.8758 81.3415 21.7105C81.6033 21.5589 81.9065 21.4211 82.0167 21.4211C82.1269 21.4211 82.7057 21.6691 83.3257 21.9585C84.2489 22.3994 84.5382 22.6337 85.0618 23.3088C85.7232 24.1769 86.5913 24.8659 87.0322 24.8659C87.3216 24.8659 88.1759 26.5193 88.9475 28.5862C89.1817 29.2338 89.7329 30.3774 90.1738 31.1352C90.6561 31.962 91.2072 33.2021 91.5655 34.2493C92.1717 36.0267 92.6264 37.0464 92.8745 37.198C93.4394 37.5424 92.2682 37.9558 89.7053 38.314C87.1425 38.6585 86.0539 38.8239 85.2272 38.9892C84.7036 39.0994 83.932 39.2235 83.5324 39.2648C83.0915 39.3199 82.8434 39.4164 82.8986 39.499C82.995 39.6368 83.4359 39.623 87.4318 39.3612C88.5479 39.2786 89.1128 39.3061 89.5675 39.4301C89.912 39.5266 90.6836 39.6782 91.2761 39.7608C92.5162 39.9124 92.902 40.0915 93.5221 40.7391C93.8941 41.1249 93.9906 41.3867 94.1697 42.4339C94.2937 43.1091 94.4866 44.0185 94.5968 44.4319C94.8586 45.4102 94.8586 46.4298 94.5831 47.2703C94.1559 48.5931 94.1283 49.0065 94.335 50.4946C94.5555 52.024 94.5279 52.7957 94.1559 54.766C94.0319 55.4963 93.9768 56.2817 94.0181 56.8604C94.1146 57.9352 93.6461 60.2638 93.0949 61.5177C92.9158 61.9311 92.7229 62.62 92.6678 63.0334C92.6264 63.4467 92.4198 64.2184 92.2131 64.7557C92.0202 65.2793 91.8548 65.734 91.8548 65.7478C91.8273 65.7892 88.4239 64.8384 87.9967 64.6731C87.7625 64.5766 87.2113 64.2873 86.7566 64.0255C86.0539 63.6121 85.7783 63.5294 84.6209 63.4192C82.871 63.2676 82.5265 63.1574 81.0797 62.3444C79.4952 61.4488 78.1862 60.9528 77.0425 60.815C76.5465 60.7599 75.9953 60.6634 75.83 60.6083C75.6371 60.5532 75.5131 60.5807 75.5131 60.6772C75.5131 60.8288 75.582 60.8425 76.767 61.1043C77.4835 61.2559 79.9637 62.5373 80.625 63.1023C81.2175 63.5983 82.3612 64.1495 83.8217 64.6731C84.4969 64.9073 85.4201 65.3344 85.8886 65.61C86.3571 65.8856 87.0873 66.299 87.5007 66.5194C87.9141 66.7399 88.6306 67.2773 89.0853 67.7182C89.54 68.1453 90.0636 68.5449 90.2289 68.6C90.4632 68.6827 90.5183 68.7654 90.4494 68.9307C90.4081 69.0685 90.2151 69.6335 90.0222 70.1984C89.5538 71.6452 89.168 72.2514 88.1897 73.0093C87.17 73.8222 86.7842 74.3596 86.3295 75.71C85.861 77.0741 85.5992 77.4599 83.7804 79.3062C82.9261 80.1743 82.1958 80.9873 82.1407 81.1388C82.0167 81.442 80.7077 82.9025 79.2196 84.3769C78.3653 85.2312 77.9519 85.5067 77.0839 85.8926C76.4776 86.1406 75.7473 86.5264 75.4442 86.7331C74.3694 87.4633 72.275 88.5657 71.3794 88.8688C69.8775 89.3924 69.4779 89.5991 68.9405 90.164C68.4583 90.6738 67.3008 91.2939 66.1296 91.6797C65.8541 91.7624 65.5096 91.969 65.3718 92.1206C65.2478 92.2722 64.7793 92.4789 64.3659 92.6029C63.9388 92.7269 63.4979 92.8509 63.3739 92.8784C63.2085 92.9198 63.1258 92.8096 63.057 92.4237C63.0156 92.1344 62.616 91.0596 62.1751 90.04C61.2244 87.8629 60.7697 86.1543 60.7697 84.8178C60.7697 84.2942 60.7145 83.7155 60.6456 83.5364C60.5216 83.1919 58.3584 80.9459 57.6143 80.3948C57.0494 79.9676 56.7876 78.9893 56.7187 77.0878C56.6222 74.5525 56.3466 73.0782 55.6577 71.6176C55.4372 71.1491 55.2581 70.6669 55.2581 70.5566C55.2581 70.2535 55.0376 70.1708 54.8447 70.4051C54.7207 70.5566 54.7207 70.6531 54.8861 70.8047C54.9963 70.9287 55.2857 71.4936 55.5337 72.0861C55.9333 73.0231 56.0022 73.3951 56.0986 74.9521C56.4706 80.6704 56.4431 80.505 57.4489 81.1388C57.7383 81.3317 58.1241 81.69 58.3032 81.938C58.4824 82.186 58.7855 82.5443 58.9922 82.7372C59.7087 83.3986 59.8327 83.8533 59.8602 85.9614C59.8878 87.0224 59.998 88.4968 60.122 89.2133C60.439 91.0596 60.4252 92.2997 60.0807 92.8647C59.8189 93.2918 59.7225 93.3332 58.2619 93.6087C57.4076 93.7741 56.388 94.0634 55.9746 94.2426C55.4097 94.5044 54.9963 94.587 54.3074 94.587C53.7975 94.587 52.957 94.711 52.4334 94.8626C51.028 95.2622 49.5812 95.3449 48.5753 95.0968C48.1206 94.9866 47.3766 94.8488 46.9219 94.7937C46.4672 94.7524 45.6955 94.6146 45.1995 94.5044C44.3314 94.3115 41.7548 93.9532 39.9635 93.8016C39.4675 93.7603 38.9301 93.6363 38.7785 93.5261C38.6132 93.4296 37.7589 93.1265 36.8633 92.8647C35.9677 92.6029 35.1685 92.3273 35.0858 92.2584C34.9342 92.1344 33.267 91.2388 31.4206 90.288C31.0072 90.0676 30.277 89.8333 29.8085 89.7506C29.0644 89.6129 28.9404 89.5577 28.7888 89.1995C28.6786 88.9239 28.6648 88.483 28.72 87.8629C28.7751 87.3531 28.8164 86.8433 28.8302 86.7331C28.8302 86.6228 28.9129 86.4299 29.0093 86.3197C29.3124 85.9614 29.7258 85.0383 29.9738 84.184C30.2081 83.371 30.9659 81.7864 31.3379 81.3593C31.4895 81.1939 31.834 80.3534 31.834 80.1605C31.834 79.9676 31.5722 80.3259 31.5033 80.629C31.4482 80.8219 31.145 81.3317 30.8143 81.7589C30.4974 82.186 30.1116 82.8061 29.9876 83.1506C29.6983 83.8808 29.6845 83.8946 29.0231 85.1485C28.3479 86.3886 28.2101 86.5402 27.2181 87.05C25.7988 87.7527 25.6748 87.7665 24.8067 87.1878C23.0293 86.0303 20.99 84.3769 20.494 83.7017C20.1495 83.2332 19.5708 82.7372 18.8267 82.2549C17.4626 81.3869 16.7048 80.5601 15.9745 79.1547C15.5749 78.3831 15.1202 77.8043 14.2935 76.9914C13.6734 76.3713 12.9569 75.5859 12.7089 75.2415L12.268 74.6214L13.1636 73.6293C13.6596 73.0782 14.0592 72.5821 14.0592 72.5132C14.0592 72.4581 14.2246 72.0585 14.4312 71.6452C14.7895 70.8598 14.9962 70.6807 17.3799 69.0823C17.6693 68.8894 18.7992 68.3658 19.8739 67.9387C22.4919 66.8915 22.3128 67.0017 23.0568 65.9407C23.732 64.9762 24.2969 64.5077 25.9091 63.5156C26.7909 62.9783 27.4799 62.5373 31.1175 60.1811C33.3359 58.7481 33.4874 58.6379 33.4874 58.4726C33.4874 58.4037 33.1292 58.5828 32.7021 58.8721C32.2611 59.1615 31.2277 59.7678 30.3872 60.2087C29.5605 60.6496 28.5133 61.2559 28.0723 61.5453C27.6314 61.8484 26.9425 62.2066 26.5291 62.3444C26.1157 62.4822 25.5233 62.7578 25.1926 62.9369C24.8619 63.1298 24.3796 63.3503 24.1178 63.433C23.8284 63.5294 23.1257 64.0806 22.3954 64.7695C21.0313 66.0785 20.8935 66.1474 18.9232 66.7399C18.1791 66.9604 17.1043 67.3186 16.5256 67.5391C15.4784 67.9524 14.0179 68.9307 13.7699 69.3992C13.6183 69.6748 12.6538 70.1984 11.7857 70.474C11.4826 70.5704 11.0279 70.7633 10.7798 70.9149C10.5318 71.0665 10.3114 71.1767 10.2838 71.1491C9.98066 70.7771 8.36853 66.6297 7.74848 64.6042C7.51424 63.8463 7.12843 62.9645 6.89419 62.6476C6.28792 61.8071 5.7781 59.7402 5.73677 58.0041C5.70921 56.9293 5.62653 56.3782 5.3234 55.455C4.99271 54.4491 4.92381 53.9393 4.82736 51.8725C4.75846 50.5497 4.63445 49.1856 4.56556 48.8411C4.3451 47.849 4.38643 46.6778 4.67579 45.9751C4.81358 45.6169 5.04782 44.8039 5.17183 44.1563C5.30962 43.5225 5.59898 42.4615 5.81944 41.8139C6.21903 40.684 6.23281 40.5876 6.13635 39.0305C6.02612 37.2393 6.0399 37.198 7.12843 34.3733C7.59692 33.1745 7.88627 32.6371 8.3272 32.1687C8.65789 31.8104 9.26416 30.8597 9.67753 30.0191C10.7385 27.9385 10.9452 27.5941 11.7306 26.5469C12.4609 25.5961 14.1281 22.923 14.7757 21.6554C14.9824 21.2558 15.4509 20.6082 15.8091 20.2086L16.4705 19.4783L17.5315 20.0984C18.1102 20.4428 19.0747 20.8838 19.6534 21.0767C20.2597 21.2696 20.9624 21.6278 21.2794 21.8758C21.5963 22.1376 22.2301 22.5923 22.6986 22.9092C23.1671 23.2262 23.5804 23.5982 23.6355 23.7498C23.7458 24.1218 26.2535 26.5055 27.1492 27.098C27.5625 27.3736 28.031 27.7319 28.1826 27.8972C28.3204 28.0626 28.8853 28.4759 29.4227 28.8342C31.021 29.8814 31.7513 30.5841 32.0958 31.3833C32.2887 31.8242 32.5918 32.2376 32.9087 32.4856C33.1843 32.6923 33.6666 33.0643 33.9697 33.2848C34.2728 33.519 34.6311 33.891 34.7689 34.1115C34.9205 34.3319 35.0858 34.5111 35.1547 34.5111C35.4303 34.5111 34.8378 33.6706 33.8595 32.6923C33.0327 31.8517 32.7158 31.4108 32.206 30.3223C31.4482 28.7239 30.9935 28.283 29.7534 27.8972C28.8853 27.6354 28.7337 27.5252 27.1078 25.9406C25.8126 24.6729 25.1512 23.8876 24.4898 22.8404C23.9938 22.0687 23.4564 21.3798 23.3186 21.2971C23.1671 21.2144 22.4919 20.6357 21.803 20.0157C21.1278 19.3819 20.1908 18.6516 19.7223 18.3898C19.2676 18.128 18.8543 17.7973 18.7992 17.6733C18.5649 16.943 22.299 13.8014 26.3362 11.3212C28.2377 10.15 30.9246 8.81345 31.6273 8.67565C31.9304 8.62054 32.6194 8.44141 33.143 8.26228C33.6804 8.08316 34.6449 7.78003 35.3063 7.57334C35.9677 7.36666 36.5877 7.10486 36.6704 7.00841C36.7668 6.89818 37.2766 6.58126 37.814 6.30569C38.7785 5.80965 38.8199 5.79587 40.9281 5.7132C42.8709 5.63052 43.1465 5.58918 44.0007 5.23093L44.9239 4.83134L45.3097 5.1207C45.8609 5.52029 46.2743 6.3608 46.3707 7.22887C46.412 7.64223 46.605 8.60676 46.7841 9.3646C47.0183 10.274 47.1286 11.1559 47.1286 11.9137C47.1286 13.1538 47.3215 14.1183 47.5695 14.1183C47.6521 14.1183 47.6659 13.9805 47.597 13.7325C47.5419 13.5258 47.4868 12.644 47.473 11.7759C47.4592 10.9078 47.3766 9.58506 47.2801 8.841C47.1837 8.09694 47.1561 7.28399 47.1974 7.04974C47.2939 6.6226 47.9139 5.49273 48.3411 4.98291C48.658 4.62466 50.3253 4.65221 51.2071 5.03802Z" fill={Color()}/>
    <path d="M52.9981 13.6774C52.9567 13.7463 52.8878 14.325 52.8327 14.9589C52.7914 15.5927 52.5985 16.7501 52.4056 17.5355C52.2264 18.3209 52.1162 19.0787 52.1575 19.2303C52.2127 19.3819 52.13 19.6437 51.9784 19.8779C51.5788 20.4291 51.2895 21.5176 51.1241 23.116C51.0414 23.8876 50.9174 24.8521 50.8348 25.2517C50.7521 25.6651 50.7245 26.1611 50.7797 26.354C50.8761 26.7122 50.8899 26.7122 50.9863 26.4367C51.0552 26.2851 51.1379 25.7891 51.193 25.3344C51.4273 23.1573 51.7304 21.7381 52.1162 20.9527C52.3367 20.5117 52.5571 19.8366 52.5847 19.4508C52.626 19.0787 52.6811 18.7205 52.7087 18.6654C52.8465 18.4449 53.3287 15.0966 53.3287 14.3526C53.3287 13.6499 53.191 13.3743 52.9981 13.6774Z" fill={Color()}/>
    <path d="M63.3879 15.51C63.3879 15.5927 63.0435 16.3505 62.6301 17.191C62.2167 18.0453 61.7483 19.189 61.5829 19.7539C61.2936 20.8424 60.3015 23.3364 59.6676 24.5903C59.2818 25.3619 58.7031 27.0705 58.7031 27.4425C58.7031 27.8972 59.0338 27.4976 59.337 26.6571C59.5299 26.1749 60.0259 25.2379 60.453 24.5627C61.1695 23.4191 61.266 23.1711 61.8034 20.9527C62.203 19.2716 62.5612 18.1831 63.0159 17.2048C63.6635 15.8269 63.7875 15.3584 63.5257 15.3584C63.4568 15.3584 63.3879 15.4273 63.3879 15.51Z" fill={Color()}/>
    <path d="M36.8079 22.2755C37.4968 23.7222 37.5382 23.8049 37.7311 23.8738C37.8964 23.9289 37.3591 22.6199 36.8355 21.7105C36.3119 20.7598 36.2843 21.1594 36.8079 22.2755Z" fill={Color()}/>
    <path d="M37.979 24.1631C38.0342 24.2733 38.1582 24.604 38.2546 24.921C38.42 25.4721 38.4337 25.4721 38.4337 25.0587C38.4475 24.7969 38.3235 24.48 38.1582 24.3009C38.0066 24.1218 37.9239 24.0529 37.979 24.1631Z" fill={Color()}/>
    <path d="M38.5854 25.8579C38.5854 25.8993 38.985 26.6158 39.4811 27.4287C39.9771 28.2417 40.4456 29.1373 40.5282 29.3991C40.6109 29.6747 40.9278 30.4738 41.231 31.1903C41.9613 32.9265 42.5813 35.1173 42.5813 35.9854C42.5813 36.7295 42.6089 36.8121 44.2899 40.1604C44.6619 40.8769 45.1993 41.7863 45.4886 42.1859C45.778 42.5855 46.15 43.2331 46.3016 43.6327C46.4532 44.0323 46.8252 44.6385 47.1283 44.983C47.5968 45.5066 49.1125 48.1384 49.016 48.2348C48.9058 48.3588 46.0398 46.8018 45.1993 46.168C44.6481 45.7409 43.849 45.2724 43.4218 45.107C42.9947 44.9555 42.3608 44.6385 42.0164 44.4181C41.6719 44.1976 41.0518 43.9083 40.6385 43.7567C39.2881 43.2882 38.5716 42.9024 37.0697 41.869C36.2568 41.3041 35.5127 40.8493 35.4301 40.8493C35.3336 40.8493 35.0718 40.7529 34.8513 40.6289C34.6171 40.5187 34.3277 40.436 34.2037 40.4773C34.066 40.5049 34.3829 40.7253 35.0029 41.0285C35.5678 41.3041 36.3532 41.7863 36.7253 42.0894C37.1111 42.3788 37.7311 42.7784 38.1032 42.9575C38.489 43.1504 39.3846 43.5776 40.1011 43.922C40.8176 44.2665 41.6306 44.7074 41.8924 44.9003C42.1404 45.107 42.7191 45.355 43.1462 45.4791C43.6561 45.6168 44.1797 45.92 44.6619 46.3058C45.0753 46.6503 46.2189 47.3392 47.2248 47.849L49.0436 48.7722L48.6027 48.9238C48.3547 49.0065 47.7897 49.3371 47.3488 49.6541C46.8941 49.9572 46.467 50.219 46.3981 50.219C46.1638 50.219 44.7859 50.9631 44.7859 51.0871C44.7859 51.2386 45.1717 51.1146 46.6461 50.467C47.9 49.9021 49.3467 49.3647 49.4019 49.4198C49.4294 49.4474 49.0712 50.6048 48.6165 52.0103C47.9275 54.1735 47.7897 54.7522 47.7346 55.8683C47.6519 57.4254 47.583 57.7147 46.6461 60.7598C45.7504 63.6259 45.6816 63.9014 45.902 63.8325C45.9985 63.805 46.3429 62.9094 46.6874 61.8484C47.0181 60.8012 47.459 59.5335 47.6519 59.0375C47.8862 58.4312 48.024 57.7009 48.1066 56.764C48.2031 55.3861 48.7267 53.2641 49.1952 52.2169C49.333 51.9138 49.5948 51.2524 49.7601 50.7564L50.077 49.847L50.7522 51.0319C51.1242 51.6796 52.0061 53.0574 52.7088 54.0771C53.3977 55.0967 54.0453 56.1301 54.1418 56.3644C54.3209 56.8329 54.9685 57.5769 55.0925 57.4667C55.1339 57.4254 54.941 57.0258 54.6792 56.5986C54.4036 56.1577 53.9627 55.3585 53.6733 54.8211C53.3977 54.2838 52.9155 53.5397 52.6261 53.1815C52.0336 52.465 51.3309 51.3075 50.9451 50.4257C50.8073 50.1225 50.6282 49.7505 50.5593 49.6127C50.4353 49.406 50.449 49.3647 50.6006 49.4336C50.7108 49.4749 51.634 49.723 52.6537 49.9848C53.6733 50.2603 54.6929 50.5497 54.9134 50.6324C55.1477 50.715 55.7953 50.839 56.3602 50.9079C57.4349 51.0319 59.7636 51.6107 61.9682 52.2996C62.9603 52.6027 63.3185 52.6716 63.5941 52.5614C64.159 52.3409 65.1098 52.3961 65.9641 52.6854C66.9562 53.0161 70.6627 53.898 71.5859 54.0082C72.0406 54.0633 72.5504 54.27 73.1015 54.6282C74.1212 55.2896 74.5759 55.455 76.7116 55.9235C77.7726 56.1577 78.682 56.2817 79.1918 56.2541L79.991 56.2128L78.8887 55.9648C74.2865 54.9038 73.1015 54.5456 72.4815 54.0082C72.2197 53.7739 68.5407 52.7543 67.5487 52.6303C67.1353 52.5752 66.405 52.3547 65.909 52.1343C65.096 51.7622 64.9444 51.7347 64.0075 51.8173C63.1394 51.9 62.8087 51.8587 61.8442 51.5693C61.2104 51.3764 60.3974 51.1422 60.0116 51.0457C59.6396 50.9493 58.8955 50.7564 58.3581 50.6186C57.8345 50.467 56.87 50.2879 56.2224 50.219C55.5748 50.1501 54.5965 49.9434 54.0591 49.7505C53.508 49.5576 52.943 49.3923 52.7915 49.3923C52.6399 49.3923 52.075 49.2269 51.5238 49.0202L50.5455 48.662L51.3309 48.2348C51.758 48.0006 52.5848 47.5046 53.1635 47.1325C53.7422 46.7743 54.3071 46.4298 54.4174 46.3885C55.2303 46.0853 57.242 44.5696 56.8425 44.5696C56.5807 44.5696 52.2541 46.8845 51.8132 47.2565C51.634 47.4081 50.5179 48.0144 50.4077 48.0144C50.3802 48.0144 50.3939 47.1601 50.4353 46.1267C50.4766 45.0795 50.449 44.0047 50.3939 43.7429C49.9392 41.7312 49.9255 41.2352 50.2561 40.0226C50.5042 39.0994 50.5731 38.4932 50.5731 37.1566C50.5731 36.2334 50.5179 35.4756 50.449 35.4756C50.3802 35.4756 50.2975 36.3574 50.2699 37.4322C50.2148 39.1408 50.1735 39.499 49.8703 40.1604C49.4707 41.056 49.457 41.8828 49.8014 43.2331C49.9806 43.9634 50.0219 44.5421 49.9668 45.8511C49.9392 46.7743 49.8566 47.6699 49.7877 47.849C49.6774 48.1246 49.5948 48.0144 49.016 46.8707C48.6578 46.1542 48.0929 45.2173 47.7484 44.7763C47.4177 44.3354 47.0594 43.7567 46.9768 43.4811C46.8114 42.9575 46.1087 41.9103 45.6264 41.4832C45.4611 41.3316 44.841 40.2155 44.2485 39.003C43.3805 37.2531 43.1462 36.6055 43.0773 35.9578C42.9809 35.0071 42.3471 32.9816 41.6857 31.4659C41.4239 30.8734 41.1483 30.1294 41.0656 29.8125C40.8314 28.9168 40.3491 28.035 39.5362 26.974C38.6543 25.8441 38.5854 25.7477 38.5854 25.8579Z" fill={Color()}/>
    <path d="M80.4048 34.1528C79.9639 34.4422 77.8006 35.2689 75.4719 36.0406C73.9149 36.5366 73.0193 36.9224 72.2477 37.4047C71.6552 37.7767 70.9111 38.2176 70.5942 38.383C69.9604 38.7137 69.795 39.003 70.3186 38.8377C70.8698 38.6723 71.7792 38.2314 71.8619 38.0936C71.9997 37.8731 72.854 37.4736 74.0665 37.0602C74.6728 36.8535 75.2377 36.633 75.3066 36.5779C75.3893 36.5228 75.8164 36.3712 76.2711 36.2472C77.7868 35.8201 80.8871 34.3595 80.8871 34.0564C80.8871 33.9048 80.7079 33.9324 80.4048 34.1528Z" fill={Color()}/>
    <path d="M35.8301 35.0623C35.8301 35.1312 35.899 35.2001 35.9679 35.2001C36.0505 35.2001 36.1057 35.1312 36.1057 35.0623C36.1057 34.9796 36.0505 34.9245 35.9679 34.9245C35.899 34.9245 35.8301 34.9796 35.8301 35.0623Z" fill={Color()}/>
    <path d="M14.6105 43.4398C14.266 43.5638 14.5278 43.7429 15.0652 43.7429C15.6715 43.7429 18.3032 44.1701 19.2402 44.4181C19.5296 44.487 20.9626 44.6248 22.3956 44.7074C23.8424 44.7901 25.3718 44.9003 25.8127 44.9417C26.3501 44.9968 26.5981 44.9692 26.5981 44.859C26.5981 44.7763 26.3915 44.7074 26.1572 44.7074C25.9092 44.7074 24.8069 44.5559 23.7183 44.363C22.6298 44.1701 21.4173 44.0185 21.0315 44.0185C20.6457 44.0185 19.8051 43.922 19.1575 43.798C18.0414 43.5913 14.8999 43.3433 14.6105 43.4398Z" fill={Color()}/>
    <path d="M80.6116 56.0061C80.2809 56.1163 80.2809 56.1163 80.6943 56.1301C80.9423 56.1439 81.3143 56.2403 81.521 56.3506C81.7415 56.4608 82.0446 56.5573 82.1962 56.5435C82.4029 56.5297 82.3891 56.5021 82.0997 56.4195C81.893 56.3644 81.5899 56.2128 81.4108 56.0888C81.2454 55.9648 81.0663 55.8683 81.025 55.8821C80.9836 55.8959 80.8045 55.951 80.6116 56.0061Z" fill={Color()}/>
    <path d="M82.8848 56.64C83.0363 56.6675 83.4773 56.764 83.8493 56.8329C85.9161 57.2187 86.8255 57.4667 87.5834 57.8112C88.5065 58.2383 88.603 58.2659 88.603 58.1005C88.603 58.0316 88.1483 57.7836 87.6109 57.5494C86.6188 57.1222 83.9044 56.5435 83.0363 56.5711C82.7745 56.5848 82.7194 56.6124 82.8848 56.64Z" fill={Color()}/>
    <path d="M36.7255 64.6042C35.9676 65.3758 35.0996 66.1474 32.206 68.6414C30.3734 70.226 29.9876 70.6807 29.6431 71.6039C29.3813 72.2928 29.1609 72.6097 28.5408 73.1609C28.1137 73.5329 27.6176 74.0289 27.4385 74.2356C26.846 74.9383 27.2594 74.8006 28.1137 74.0014C28.5821 73.5742 29.0093 73.2298 29.0782 73.2298C29.1471 73.2298 29.4502 72.7475 29.7671 72.1412C30.3321 71.0527 30.7041 70.6531 32.5918 69.0272C35.6094 66.4505 37.9242 64.0392 37.6073 63.8188C37.5798 63.7912 37.1802 64.1495 36.7255 64.6042Z" fill={Color()}/>
    <path d="M68.4312 67.9662C68.3898 68.0489 68.5552 68.2969 68.7894 68.5173C70.3051 69.8814 70.7184 70.2259 71.6554 70.8598C72.2203 71.2456 73.1711 72.0034 73.7774 72.527C74.9899 73.6293 76.0095 74.332 76.3265 74.332C76.4642 74.3183 76.2989 74.1116 75.9269 73.8084C75.5962 73.5329 75.1001 73.0506 74.8246 72.7475C73.9151 71.714 73.4604 71.3696 72.055 70.6117C71.2007 70.1432 70.3464 69.5645 69.8779 69.0961C68.6929 67.9524 68.5276 67.8284 68.4312 67.9662Z" fill={Color()}/>
    <path d="M46.1639 72.775C46.1501 73.3813 45.5438 75.7926 45.0202 77.2945C44.7584 78.0523 44.4691 79.1409 44.3726 79.7058C44.29 80.2707 44.1246 81.0837 44.0282 81.4971C43.9317 81.9104 43.8077 82.6545 43.7526 83.1505C43.5735 84.8453 43.105 86.9397 42.6365 88.166C42.1818 89.351 42.0302 90.3156 42.3058 90.3156C42.3885 90.3156 42.4436 90.2191 42.4436 90.0951C42.4436 89.8608 42.7467 88.8137 43.1463 87.7251C43.5183 86.6779 43.7939 85.3965 43.9593 83.9773C44.0419 83.3021 44.2762 81.9655 44.4966 80.9872C44.7033 80.0227 44.9651 78.824 45.0478 78.3417C45.1443 77.8457 45.3785 77.1429 45.5576 76.7709C46.0812 75.765 46.6599 72.403 46.3155 72.403C46.2328 72.403 46.1639 72.5683 46.1639 72.775Z" fill={Color()}/>
    </svg>
    </div>
    
}