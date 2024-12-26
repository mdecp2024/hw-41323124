var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: mdecp2024/hw-41323124: mdecp2024-hw-cp2024_hw created by GitHub Classroom \n 個人網站: 41323124 (github.com) \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'W7', 'text': '利用 ShareX拍攝畫面,學習brython程式print及for迴圈的練習 \n 影片: \n a="我已經會寫簡單的python程式了"\n\nfor i in range(1,11):\n    print(i,a) \n \n 原本我利用電腦本身的錄影系統進行螢幕的錄製,發現畫面跳來跳去的很容易當掉,但這次利用ShareX錄影,完全沒有任何的問題,這次的練習讓我知道python程式的一些基本用法,希望後續可以更深入的理解程式設計。 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'w10', 'text': '期中考 \n 題目一: \n \n 題目二: \n \n 題目三: \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '說明:依照範例,將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行。 \n 題目一: \n \n # 設定區域大小和圓的參數\nwidth, height = 10, 10\ncenter_x, center_y = width // 2, height // 2  # 圓心\nradius = 4  # 圓的半徑\n\n# 繪製圓形\nfor y in range(height):\n    for x in range(width):\n        # 計算與圓心的距離\n        distance = ((x - center_x) ** 2 + (y - center_y) ** 2) ** 0.5\n        # 判斷是否在圓的範圍內\n        if distance <= radius:\n            print("*", end="")\n        else:\n            print(" ", end="")\n    print()\n \n 這段程式讓我學習到,如何設定一個圓的中心點以及大小,並利用程式判斷的方式,使圓的範圍內都可以更換成自己想要的符號以及文字,否則為(空白)。 \n 題目二: \n \n from browser import html\nfrom browser import document as doc\n\n# 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n\n# gs * 10 = canvas width and height\nctx = canvas.getContext("2d")\n\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\ndef grid(width, height, grid_pix):\n    # x 方向共 width 格\n    # y 方向共 height 格\n    # grid_pix, 每一個的 pixel 點數\n    # 利用迴圈與座標增量繪圖\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\ndef fill(x, y, color):\n    # 填充方塊，座標以網格的左上角為基準\n    ctx.fillStyle = color\n    ctx.fillRect((x - 1) * gs, (y - 1) * gs, gs, gs)\n\n# 繪製網格\ngrid(10, 10, gs)\n\n# 圓的參數\nradius = 4  # 圓的半徑 (單位為格數)\ncenter_x, center_y = 5, 5  # 圓心 (以格座標表示)\n\n# 填充圓形範圍\nfor x in range(1, 11):\n    for y in range(1, 11):\n        # 計算每個格中心與圓心的距離\n        distance = ((x - center_x) ** 2 + (y - center_y) ** 2) ** 0.5\n        if distance <= radius:\n            fill(x, y, "black")  # 填充黑色方塊 \n 第二題讓我知道,(gs)原本是表示每格的像素大小,但在繪製網格的時候卻可以調整,整張圖的比例大小,並利用grid#負責繪製網格(10, 10, gs),並在指定區域填滿黑色的方塊。 也可以透過調整參數,使圓型更加的圓。 \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': '\n n = 10 # 總共的行數\nspace = \'_\'\nfor i in range(n):  # 對於每一行\n     #print(space * (n - i - 1), end=\'\')  # 在每行前面印出空格\n   print("目前數字為" + str(i)) \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_hw', 'text': '第一題 :string_input_print(字串輸出打印)\xa0\xa0 程式 \xa0 \xa0 \xa0 \n 說明 :一:詢問(你叫什麼名字？/你來自哪裡？)並且回應(你好/真棒) \n \xa0 \xa0 \xa0 \xa0 \xa0二:畫出一隻貓\xa0 \xa0\xa0 \n 第二題 :variables(變數)\xa0\xa0 程式 \xa0 \xa0 \xa0 \n 說明 : 詢問(你叫什麼名字？/你最喜歡的食物是什麼？) \n 之後使用字串連接列印回答：("嗨！我的名字是 " + name)/("我最喜歡的食物是 " + favorite_food)/(name + "的最喜歡的食物是 " + favorite_food) \n 第三題 :list_if_in_else(如果在列表中則執行，否則執行)\xa0\xa0 程式 \n 說明 :查詢書店書籍,如果有就顯示( "是的，我們有賣這本書！" ),否則就顯示( "抱歉，我們沒有賣這本書。" )。 \n 第四題 :list_append_remove(列表_附加_移除)\xa0\xa0 程式 \n 說明:( 問是否有其他需要購買的物品，如果沒有則將其加入清單)(問是否需要移除某項物品，並根據情況移除它。) \n 第五題 :list_index_pop_insert(列表索引移除插入)\xa0\xa0 程式 \n 說明 :在菜單中尋找指定物(沙拉),並將它移除且加入指定物(薯條) \n 第六題 :list_slicing(列表切片)\xa0\xa0 程式 \n 說明 :這段程式碼展示了如何使用列表切片技巧來處理城市名稱列表，並涵蓋了多種常見的切片方式，包括正向、反向和帶有步長的切片操作。 \n 第七題 :list_slicing_use(列表切片使用)\xa0\xa0 程式 \n 說明 : 使用切片替換列表中的元素/使用切片進行元素的添加/刪除列表中的元素及整個列表。 \n \n 第八題 :for_range(範圍)\xa0\xa0 程式 \n 說明 :列出朋友的名子與他們喜歡的食物。 \n 第九題 :for_loop_if_equals(for迴圈)\xa0\xa0 程式 \n 說明 :列出動物的名子,並標示出特別想看的種類以及訊息,其餘則顯示一般訊息。 \n 第十題 :for_search(搜尋)\xa0  程式 \n 說明 :依據不同的條件,將不同名子長度的物品做區分。 \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w13_hw', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n 心得:這項作業經過了與chatGPT的長期抗戰,才發現可以運用到python的混色模式,對圖型可以在重疊的地方更改顏色,但這就讓我耗費了數個小時,最後我想到可以降低圖型的透明度,對重疊的地方,有更多的顏色可以呈現出來,才完成了這次的作業。 \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n 程式碼 \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '從 1 累加到 100 \n total = 0\nfor i in range(1, 100+1):  # range(1, 101) 代表從 1 到 100\n    total += i\nprint(total)#印出累加後的數字 \n \n addto \n #addto(將數字加到某個範圍的總和)\ndef addto(start, end):\n    total = 0\n    for i in range(start, end + 1):  # range 包含 start 到 end\n        total += i\n    return total#將累加的結果（變數 total）傳回\n\n# 使用函式計算從 1 到 100 的累加結果\nresult = addto(1, 100)#result(結果)\nprint(result)  # 輸出：5050 \n \n add_only_even \n # 定義一個 addto 函數來計算總和 #addto(將數字加到某個範圍的總和)\ndef addto(start, end):\n    total = 0\n    for i in range(start, end + 1):\n        total += i\n    return total#將累加的結果（變數 total）傳回\n \n# 輸入兩個數字\nnum1 = int(input("請輸入第一個數字: "))#int:將字串改為正整數,(3.5)也被視為正整數3。\nnum2 = int(input("請輸入第二個數字: "))#input(輸入)\n \n\nstart = min(num1, num2)#min()找出兩數字較小的數。\nend = max(num1, num2)#max()找出兩數字較大的數。\n \n# 計算總和\nsum = addto(start, end)\n \nprint(f"{num1} 到 {num2} 之間所有數字的總和是: {sum}") \n \n add_avoid_8 \n # 定義 add_only_even 函式#(add_only_even)僅加偶數\ndef add_only_even(start, end):\n    sum = 0\n    for i in range(start, end + 1):  # 遍歷從 start 到 end (包括 end)\n        if i % 2 == 0:  # 檢查是否為偶數  # %是取餘數運算符號\n            sum += i\n    return sum  # 將計算出來的偶數總和結果返回。\n  \n# 定義 add_avoid_8 函式\ndef add_avoid_8(start, end):  # 計算範圍內所有數字的總和，但排除掉包含數字 "8" 的數字。\n    sum = 0\n    for i in range(start, end + 1):  # 遍歷從 start 到 end (包括 end)\n        if \'8\' not in str(i):  # 檢查數字中是否不包含"8" #str:將資料轉換為字串\n            sum += i\n    return sum\n  \n# 測試 add_only_even 函式\nresult = add_only_even(1, 100)\nprint("1 到 100 的偶數累加結果是:", result)\n\n \n \n ex:排除有"3"、"8"的數字 \n # 定義 add_avoid_8_and_3 函式\ndef add_avoid_8_and_3(start, end):  # 計算範圍內所有數字的總和，但排除掉包含數字 "8" 和 "3" 的數字\n    sum = 0\n    for i in range(start, end + 1):  # 遍歷從 start 到 end (包括 end)\n        if \'8\' not in str(i) and \'3\' not in str(i):  # 檢查數字中是否不包含"8"和"3"  #str:將資料轉換為字串\n            sum += i\n    return sum\n\n\n# 測試 add_avoid_8_and_3 函式\nresult_avoid_8_and_3 = add_avoid_8_and_3(1, 100)\nprint("1 到 100 的總和，排除包含\'8\'和\'3\'的數字是:", result_avoid_8_and_3)\n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n 程式 \n \n 網頁 \n \n 影片 \n \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n cp2024/content/Brython.html  \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};