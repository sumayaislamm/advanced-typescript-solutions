# Blog 2
## How Pick and Omit Utility Types Help Prevent Code Duplication in TypeScript

## Introduction:

TypeScript এ অনেক সময় একটি interface থেকে আলাদা আলাদা version তৈরি করার প্রয়োজন হয়। কিন্তু বার বার নতুন interface তৈরি করলে code duplication হয় এবং project maintain করা কঠিন হয়ে যায়। এই সমস্যা সমাধানের জন্য TypeScript এ `Pick` এবং `Omit` নামে utility types রয়েছে। এগুলোর মাধ্যমে আমরা একটি main interface থেকে প্রয়োজনীয় property নিতে বা বাদ দিতে পারি। এর ফলে code clean থাকে এবং DRY এর principle follow করা সহজ হয়।

## Body:

### What is Pick?
Pick ব্যবহার করা হয় একটি interface থেকে নির্দিষ্ট কিছু property নেওয়ার জন্য।
### Why is Pick Important?
Pick ব্যবহার করলে আমাদের নতুন interface বার বার লিখতে হয় না।এতে code less থাকে, duplication কমে যায় এবং project অনেক সাজানো থাকে।
### Example of Pick:
```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
type UserProfile = Pick<User, "name" | "email">;
```



### What is Omit?
Omit ব্যবহার করা হয় একটি interface থেকে নির্দিষ্ট property বাদ দেওয়ার জন্য।
### Why is Omit Important?
Omit আমাদের unnecessary বা sensitive data remove করতে সাহায্য করে। বিশেষ করে বড় project এ password এর মতো private data hide করার জন্য এটা অনেক useful।

### Example of Omit: 
```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
} 
type PublicUser = Omit<User, "password">;
```


### How Pick and Omit Help Keep Code DRY
DRY(Don't Repeat Yourself): Pick এবং Omit ব্যবহার করলে একই interface বার বার লিখতে হয় না। একটি main interface থেকেই আমরা প্রয়োজন অনুযায়ী ছোট ছোট version তৈরি করতে পারি।

Example without utility types: 
```ts
interface UserProfile {
  name: string;
  email: string;
}
```

Example with utility types: 
```ts
type UserProfile = Pick<User, "name" | "email">; 
```


## Conclusion :

'Pick' এবং 'Omit' TypeScript এর খুব useful utility types। Pick দিয়ে আমরা প্রয়োজনীয় property নিতে পারি এবং Omit দিয়ে যে property লাগবে না সেটা বাদ দিতে পারি। এই feature ব্যবহার করলে code reusable হয়, duplication কমে যায় এবং project maintain করা অনেক সহজ হয়ে যায়। বড় project এ clean এবং organized code লেখার জন্য এই দুটো খুব গুরুত্বপূর্ণ।