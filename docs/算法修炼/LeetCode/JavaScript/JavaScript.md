# JavaScript

## 算法

### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 `nums` 和一个目标值 `target`请你在该数组中找出和为目标值的那 **两个** 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

**解**

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
```

### [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

**解**

> 需要创建 ListNode 表链的构造函数 及 表链转数组、数组转表链的函数
>
> 遍历数组相加

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  l1 = listNode2arr(l1)
  l2 = listNode2arr(l2)
  var res = []
  len = l1.length > l2.length ? l1.length : l2.length
  for (var i = 0; i < len; i++) {
    var tmp = (l1[i] || 0) + (l2[i] || 0)
    res[i] = res[i] || 0
    res[i] += tmp
    if (res[i] > 9) {
      res[i] = res[i] - 10
      res[i + 1] = 1
    }
  }
  return arr2listNode(res)
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function arr2listNode(arr) {
  var next = new ListNode(arr[arr.length - 1])
  var res = next
  for (var i = arr.length - 1; i > 0; i--) {
    res = new ListNode(arr[i - 1])
    res.next = next
    next = res
  }
  return res
}

function listNode2arr(listnode, arr = []) {
  arr.push(listnode.val)
  if (listnode.next) {
    listNode2arr(listnode.next, arr)
  }
  return arr
}
```

### [3.无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

**解**

> 滑动窗口

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0
  let tempStr = ''
  for (let i = 0; i < s.length; i++) {
    let index = tempStr.indexOf(s[i])
    if (index >= 0) {
      tempStr = tempStr.substring(index + 1)
    }
    tempStr += s[i]
    res = Math.max(res, tempStr.length)
  }
  return res
}
```

### [4. 寻找两个有序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

给定两个大小为 m 和 n 的有序数组 `nums1` 和 `nums2`。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 `nums1` 和 `nums2` 不会同时为空。

**示例 1:**

```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

**示例 2:**

```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

**解**

> 先排序，再取中位数

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b)
  let index = parseInt(arr.length / 2)
  return arr.length % 2 ? arr[index] : (arr[index - 1] + arr[index]) / 2
}
```

### [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

**示例 1：**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2：**

```
输入: "cbbd"
输出: "bb"
```

**解**

> 冒泡遍历的思路，可解，但会超时

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
  if (str.length < 2) return str
  for (var i = 0; i < str.length - 1; i++) {
    for (var j = 0; j < i + 1; j++) {
      var temp = str.substring(j, str.length - i + j)
      if (
        temp ===
        temp
          .split('')
          .reverse()
          .join('')
      ) {
        return temp
      }
    }
  }
  return str[0]
}
```

> 中心查找+遍历

```javascript
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  if (s.length < 2) return s // 传入的字符串长度小于2，直接输出
  let len = s.length, // 字符串长度
    maxLen = 0, // 最大回文长度
    left = 0, // （左边）起始位置
    right = 0, // （右边）结束位置
    start = 0 // 回文起始位置
  for (let i = 0; i < len; ) {
    // 遍历字符串
    if (len - i <= maxLen / 2) break // 剩下未遍历的字符串长度小于回文字符串的长度，即剩余字符串就算组成回文，也无法超过最大回文长度，跳出循环
    left = i // 初始化 起始位置
    right = i
    while (right < len - 1 && s[right + 1] == s[right]) {
      // 循环判断是否为 重复字符（假设回文中心是重复字符，无所谓多少个）
      ++right // 继续右移
    }
    i = right + 1 // 遍历起始位置位移到重复字符串的后一项
    while (right < len - 1 && left > 0 && s[right + 1] == s[left - 1]) {
      // 循环判断 重复字符 左右是否相同，不同就跳出
      ++right // 右移
      --left // 左移
    }
    if (maxLen < right - left + 1) {
      // 如果记录的最大长度，小于 右侧-左侧 的长度
      maxLen = right - left + 1 // 记录最大回文字符串长度
      start = left // 记录最大回文字符串的起始位置
    }
  }
  return s.substring(start, start + maxLen) // 输出 截取回文字符串[起始位置,起始位置+最大长度)
}
```

> 假设+遍历

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
  if (str.length < 2) return str
  for (let i = 0; i < str.length - 1; i++) {
    let len = str.length - i
    for (let j = 0; j <= i; j++) {
      let tempStr = str.substring(j, j + len)
      let leftIndex = Math.floor(tempStr.length / 2) - 1
      let rightIndex = tempStr.length % 2 ? leftIndex + 2 : leftIndex + 1
      if (tempStr.length <= 3 && tempStr[leftIndex] === tempStr[rightIndex]) {
        return tempStr
      }
      while (tempStr[leftIndex] === tempStr[rightIndex]) {
        if (leftIndex === 0) {
          return tempStr
        } else {
          --leftIndex
          ++rightIndex
        }
      }
    }
  }
  return str[0]
}
```

### [6. Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：

```
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

```
string convert(string s, int numRows);
```

**示例 1:**

```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
解释:

 L   C   I   R
 E T O E S I I G
 E   D   H   N
```

**示例 2:**

```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

**解**

> 难点是方向转换

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s
  let resArr = [],
    row = 0,
    flag = false
  for (let i = 0; i < s.length; i++) {
    resArr[row] = resArr[row] ? resArr[row] + s[i] : s[i]
    if (row === numRows - 1 || row === 0) {
      flag = !flag
    }
    flag ? row++ : row--
  }
  return resArr.join('')
}
```

### [7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例 1:**

```
输入: 123
输出: 321
```

**示例 2:**

```
输入: -123
输出: -321
```

**示例 3:**

```
输入: 120
输出: 21
```

> 注意:
> 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为  [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

**解**

> 数字转字符串 -> 字符串转数组 -> 数组反转 -> 正负判断 -> 溢出判断

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let [flag, str] = [x > 0, x > 0 ? x : -x]
  res = str
    .toString()
    .split('')
    .reverse()
    .join('')
  res = flag ? res : -res
  if (res <= (-2) ** 31 || res >= 2 ** 31 - 1) res = 0
  return res
}
```

### [8. 字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/)

请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

**在任何情况下，若函数不能进行有效的转换时，请返回 0。**

> 说明：
>
> 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231, 231 − 1]。
>
> 如果数值超过这个范围，请返回 INT_MAX (231 − 1) 或 INT_MIN (−231) 。

**示例 1:**

```
输入: "42"
输出: 42
```

**示例 2:**

```
输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```

**示例 3:**

```
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```

**示例 4:**

```
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
```

**解**

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()
  let [res, min, max] = [str[0], (-2) ** 31, 2 ** 31 - 1]
  for (let i = 1; i < str.length; i++) {
    if (str[i] == ' ' || isNaN(str[i])) {
      break
    }
    res += str[i]
  }
  res = isNaN(res) ? 0 : res
  if (res < min) res = min
  if (res > max) res = max
  return res
}
```

### [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例 1:**

```
输入: 121
输出: true
```

**示例 2:**

```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3:**

```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

> **进阶:**
>
> 你能不将整数转为字符串来解决这个问题吗？

**解**

> 翻转数组

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return (
    x
      .toString()
      .split('')
      .reverse()
      .join('') == x.toString()
  )
}
```

### ~~[10. 正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)~~

给你一个字符串 `s` 和一个字符规律 `p`，请你来实现一个支持 `'.'` 和 `'*'` 的正则表达式匹配。

```
'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
```

所谓匹配，是要涵盖 **整个** 字符串 `s`的，而不是部分字符串。

**说明:**

- `s` 可能为空，且只包含从 `a-z` 的小写字母。
- `p` 可能为空，且只包含从 `a-z` 的小写字母，以及字符 `.` 和 `*`。

**示例 1:**

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```

**示例 2:**

```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

**示例 3:**

```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

**示例 4:**

```
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

**示例 5:**

```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```

**解**

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {}
```

### [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

> **说明**
>
> 你不能倾斜容器，且 _n_ 的值至少为 2。

![question_11](./assets/question_11.jpg)

> 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

**示例:**

```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```

**解**

> 双指针

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let [left, right, max] = [0, height.length - 1, 0]

  do {
    let [width, minHeight] = [right - left]
    if (height[left] < height[right]) {
      minHeight = height[left]
      left++
    } else {
      minHeight = height[right]
      right--
    }
    max = minHeight * width > max ? minHeight * width : max
  } while (left !== right)
  return max
}
```

### ~~[12. 整数转罗马数字](https://leetcode-cn.com/problems/integer-to-roman/)~~

罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

> 字符 数值
> I 1
> V 5
> X 10
> L 50
> C 100
> D 500
> M 1000

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

- I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。

- X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。

- C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

**示例 1:**

```
输入: 3
输出: "III"
```

**示例 2:**

```
输入: 4
输出: "IV"
```

**示例 3:**

```
输入: 9
输出: "IX"
```

**示例 4:**

```
输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
```

**示例 5:**

```
输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

**解**

```js
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {}
```

### ~~[13. 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)~~

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

> 字符 数值
> I 1
> V 5
> X 10
> L 50
> C 100
> D 500
> M 1000

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

**示例 1:**

```
输入: "III"
输出: 3
```

**示例 2:**

```
输入: "IV"
输出: 4
```

**示例 3:**

```
输入: "IX"
输出: 9
```

**示例 4:**

```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5:**

```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

**解**

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {}
```

### [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

**示例 1:**

```
输入: ["flower","flow","flight"]
输出: "fl"
```

**示例 2:**

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

> 说明:
>
> 所有输入只包含小写字母 `a-z` 。

**解**

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  if (strs.length == 1) return strs[0]
  let [res, flag, index] = ['', true, 0]
  let firstStr = strs[0]
  while (flag) {
    flag = strs.every(v => {
      if (!v[index]) {
        return false
      }
      return v[index] == firstStr[index]
    })
    if (flag) {
      res += firstStr[index]
    }
    index++
  }
  return res
}
```

### [28. 实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)

给定一个 `haystack` 字符串和一个 `needle` 字符串，在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 **-1**。

**示例 1:**

```
输入: haystack = "hello", needle = "ll"
输出: 2
```

**示例 2:**

```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

> **说明:**
>
> 当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
>
> 对于本题而言，当 `needle` 是空字符串时我们应当返回 0 。这与 C 语言的 `strstr()` 以及 Java 的 `indexOf()` 定义相符。

**解**

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let tempStr = haystack.substring(i, i + needle.length)
    let flag = [].every.call(needle, (v, index) => {
      return v === tempStr[index]
    })
    if (flag) {
      return i
    }
  }
  return -1
}
```
