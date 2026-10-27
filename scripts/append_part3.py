import json
import os

with open("scripts/build_bsc_sem2_math_cs.py", "r", encoding="utf-8") as f:
    content = f.read()

part3 = '''
# =========================================================================
# 5. DATA STRUCTURES USING C (B.Sc CS Sem 2)
# =========================================================================

add_unit(
    "bsc-dsc: arrays & linked lists",
    [
        "Array Representation in Memory: Contiguous memory allocation; Base address $B$, element size $s$; 1D address formula $\\\\text{Addr}(A[i]) = B + (i - \\\\text{lower}) \\\\cdot s$; Row-major 2D offset $\\\\text{Addr}(A[i][j]) = B + [(i - l_1) C + (j - l_2)] s$.",
        "Column-Major Memory Mapping: Addressing column-by-column: $\\\\text{Addr}(A[i][j]) = B + [(j - l_2) R + (i - l_1)] s$; Used in numerical Fortran and low-level linear algebra kernels.",
        "Dynamic Memory Allocation in C: Functions `malloc(bytes)` (uninitialized heap allocation), `calloc(n, size)` (zero-initialized), `realloc(ptr, new_size)` (resizes block), and `free(ptr)` (prevents memory leaks).",
        "Singly Linked List Implementation: C struct definition `struct Node { int data; struct Node *next; };`; Insertion at head $\\\\mathcal{O}(1)$, insertion at tail $\\\\mathcal{O}(n)$ without tail pointer, traversal $\\\\mathcal{O}(n)$.",
        "Doubly Linked List Mechanics: Bidirectional navigation struct with `prev` and `next` pointers; Node deletion in $\\\\mathcal{O}(1)$ given direct pointer to node: `p->prev->next = p->next; p->next->prev = p->prev; free(p);`.",
        "Circular Linked List Architecture: Tail node points back to head node (`tail->next = head`); Simplifies round-robin process scheduling algorithms; Eliminates null-pointer checks during traversal.",
        "Header Linked Lists & Sentinel Nodes: Dummy header node eliminates special-case conditional logic when inserting or deleting at the list boundaries (head or tail).",
        "Polynomial Addition using Linked Lists: Representing polynomial terms as nodes `(coeff, exp, next)`; Merging sorted exponential exponents in linear time $\\\\mathcal{O}(m + n)$.",
        "Sparse Matrix Representation via Linked Lists: Coordinate lists storing non-zero triples `(row, col, value)`; Multi-linked structures with row and column header pointers saving space when sparsity $> 80\\\\%$.",
        "Memory Fragmentation & Dangling Pointers: Internal vs external fragmentation; Dangling pointer danger after `free(ptr)`; Best practice of immediately setting `ptr = NULL` post deallocation."
    ],
    [
        "1D Address Calculation: $\\\\text{Loc}(A[i]) = \\\\text{Base} + i \\\\times \\\\text{sizeof}(\\\\text{type})$.",
        "Row-Major 2D Formula: $\\\\text{Loc}(A[i][j]) = B + (i \\\\cdot C + j) \\\\cdot s$.",
        "Column-Major 2D Formula: $\\\\text{Loc}(A[i][j]) = B + (j \\\\cdot R + i) \\\\cdot s$.",
        "Malloc vs Calloc: `malloc` leaves memory uninitialized; `calloc` zeros all allocated bytes.",
        "Free Function Rule: Always set pointer to `NULL` after calling `free()` to prevent dangling pointers.",
        "Singly List Insertion at Head: $\\\\mathcal{O}(1)$ time complexity.",
        "Doubly List Node Deletion: Requires updating both adjacent neighbors in $\\\\mathcal{O}(1)$ time.",
        "Circular List Condition: Traversal terminates when current pointer equals head again.",
        "Memory Leak Definition: Unreferenced allocated heap blocks failing to be returned via `free()`.",
        "Exam Trap: Never dereference a pointer returned by `malloc()` without first checking `if (ptr == NULL)`."
    ]
)

add_unit(
    "bsc-dsc: stacks & queues",
    [
        "Stack Abstract Data Type (LIFO): Last-In First-Out data structure; Primitive operations `push(item)` (inserts at top), `pop()` (removes from top), `peek()` (inspects top), and `isEmpty()`; Constant time $\\\\mathcal{O}(1)$ performance.",
        "Array-Based Stack Implementation in C: Stack fixed array `stack[MAX]` with integer index `top = -1`; Stack Overflow condition `top == MAX - 1`; Stack Underflow condition `top == -1`.",
        "Linked List Implementation of Stack: Dynamic stack where `top` points to the head node of a singly linked list; Dynamic allocation eliminates stack overflow up to available virtual memory.",
        "Infix to Postfix Conversion (Shunting-Yard): Uses operator stack and precedence hierarchy: parentheses > exponents > multiplication/division > addition/subtraction; Outputs operands immediately, buffers operators.",
        "Postfix Expression Evaluation: Operands pushed onto operand stack; Operator pops top two operands, executes operation ($v_1 \\\\text{ op } v_2$), and pushes result back onto stack in $\\\\mathcal{O}(n)$ time.",
        "Queue Abstract Data Type (FIFO): First-In First-Out structure; `enqueue(item)` inserts at `rear`, `dequeue()` removes from `front`; Linear array implementation suffers from false overflow.",
        "Circular Queue Mechanics: Fixed array wrapping indices via modulo arithmetic: `rear = (rear + 1) % MAX`; Queue full condition `(rear + 1) % MAX == front`; Queue empty condition `front == rear == -1`.",
        "Double-Ended Queue (Deque): Data structure supporting insertion and deletion at both ends; Input-restricted deque vs output-restricted deque.",
        "Priority Queue using Arrays: Elements inserted with assigned priority; Higher priority items dequeued ahead of lower priority items; Unordered array gives $\\\\mathcal{O}(1)$ insertion and $\\\\mathcal{O}(n)$ deletion.",
        "System Call Stack & Recursion Simulation: Hardware call stack saving activation records (parameters, local variables, return address); Simulating recursive algorithms iteratively via explicit user-managed stack."
    ],
    [
        "Stack Principle: LIFO (Last-In First-Out).",
        "Stack Overflow Condition: `top >= MAX - 1` in fixed array implementations.",
        "Stack Underflow Condition: `top < 0` when attempting a pop.",
        "Queue Principle: FIFO (First-In First-Out).",
        "Circular Queue Full Test: `(rear + 1) % MAX == front`.",
        "Circular Queue Next Position: `index = (index + 1) % MAX`.",
        "Infix to Postfix Precedence: Highest precedence operator pops lower or equal precedence operators.",
        "Postfix Evaluation Stack: Binary operator pops 2 operands: right operand first, then left operand.",
        "Recursion Stack Frame: Stores return address, parameters, and local scope state variables.",
        "Exam Tip: In circular queue problems, always maintain separate flags or use the modulo formula to avoid mixing up empty and full states."
    ]
)

add_unit(
    "bsc-dsc: trees",
    [
        "Tree Terminology & Definitions: Hierarchical non-linear structure; Node, edge, root, parent, child, siblings, leaf (external node), internal node; Degree of a node; Height of a tree vs depth of a node.",
        "Binary Tree Properties: Each node has at most two children (`left` and `right`); Maximum nodes at level $i$ is $2^i$; Maximum nodes in tree of height $h$ is $2^{h+1} - 1$; In non-empty binary tree with $n_0$ leaves and $n_2$ nodes of degree 2, $n_0 = n_2 + 1$.",
        "Binary Tree Memory Representation: Sequential array representation (root at index 1; left child at $2i$, right child at $2i+1$, parent at $\\\\lfloor i/2 \\\\rfloor$); Linked representation using C struct with two child pointers.",
        "Binary Tree Traversal Algorithms: Preorder (Root-Left-Right), Inorder (Left-Root-Right), Postorder (Left-Right-Root); Level-order traversal implemented using FIFO queue in $\\\\mathcal{O}(n)$ time and space.",
        "Binary Search Tree (BST) Ordering Principle: For every node $X$, all keys in left subtree are strictly smaller than $X.key$, and all keys in right subtree are strictly greater; Inorder traversal of BST yields strictly sorted sequence.",
        "BST Search and Insertion in C: Recursive search executes in $\\\\mathcal{O}(h)$ time; Insertion locates appropriate null pointer leaf and links newly allocated node; Best case height $h = \\\\mathcal{O}(\\\\log n)$, worst case degenerate skewed tree $h = \\\\mathcal{O}(n)$.",
        "BST Deletion Algorithm: Three structural cases: (1) Leaf node (simply free and nullify pointer); (2) Node with one child (replace node with child); (3) Node with two children (replace with inorder successor or predecessor, then recursively delete successor).",
        "Threaded Binary Trees: Reuses null child pointers to store inorder predecessor (left thread) and inorder successor (right thread); Enables stackless and non-recursive inorder traversal.",
        "Expression Trees: Binary tree where internal nodes represent operators ($+, -, *, /$) and leaves represent operands; Inorder gives infix, postorder gives postfix expression.",
        "Binary Tree Reconstruction: A binary tree can be reconstructed uniquely given its Inorder traversal combined with either its Preorder or its Postorder traversal."
    ],
    [
        "Leaf Node Relation: In any binary tree, leaves count $n_0 = n_2 + 1$ (where $n_2$ is count of nodes with 2 children).",
        "Array Tree Indices: Left child $= 2i$, Right child $= 2i + 1$, Parent $= \\\\lfloor i/2 \\\\rfloor$ (1-indexed).",
        "Inorder Traversal: Left $\\\\to$ Root $\\\\to$ Right; produces sorted order in BST.",
        "Preorder Traversal: Root $\\\\to$ Left $\\\\to$ Right.",
        "Postorder Traversal: Left $\\\\to$ Right $\\\\to$ Root.",
        "BST Two-Child Deletion: Replace target node's key with inorder successor (minimum element in right subtree).",
        "BST Worst-Case Height: $\\\\mathcal{O}(n)$ for sorted or reverse-sorted input sequences.",
        "Threaded Tree Benefit: Eliminates recursion and stack overhead during tree traversal.",
        "Level-Order Queue: Pushes root, then repeatedly dequeues node and enqueues its children.",
        "Exam Tip: Inorder ALONE cannot reconstruct a tree; you must pair Inorder with either Preorder or Postorder."
    ]
)

add_unit(
    "bsc-dsc: sorting & searching",
    [
        "Linear Search Algorithm: Sequentially scans elements in array from index $0$ to $n-1$; Best-case time $\\\\mathcal{O}(1)$, worst-case and average-case time $\\\\mathcal{O}(n)$; Applicable to unsorted arrays and linked lists.",
        "Binary Search Algorithm: Operates on sorted array; Compares target against midpoint $mid = low + (high - low)/2$; Halves search interval each step; Recurrence $T(n) = T(n/2) + \\\\mathcal{O}(1)$ gives logarithmic time $\\\\mathcal{O}(\\\\log n)$.",
        "Bubble Sort Algorithm: Repeatedly steps through list, comparing adjacent elements and swapping them if out of order; $n-1$ passes; Worst-case $\\\\mathcal{O}(n^2)$; Optimized with boolean swap flag achieving $\\\\mathcal{O}(n)$ best-case for sorted input.",
        "Selection Sort Algorithm: Finds minimum element from unsorted subarray and swaps it to the beginning; Executes exactly $\\\\frac{n(n-1)}{2}$ comparisons in all cases; Total time $\\\\mathcal{O}(n^2)$; Unstable sort.",
        "Insertion Sort Algorithm: Builds sorted array one element at a time by shifting larger elements to the right; Best-case $\\\\mathcal{O}(n)$ for nearly-sorted data; Worst-case $\\\\mathcal{O}(n^2)$ for reverse-sorted data; Stable, in-place sort.",
        "Quicksort Partition Schemes: Divide-and-conquer sorting; Hoare partition vs Lomuto partition; Average-case time $\\\\mathcal{O}(n \\\\log n)$; Worst-case time $\\\\mathcal{O}(n^2)$ when pivot chosen is extreme element; Mitigated via randomized pivot.",
        "Merge Sort Implementation: Divides array into two halves, recursively sorts them, and merges sorted subarrays using temporary array; Recurrence $T(n) = 2 T(n/2) + \\\\mathcal{O}(n) \\\\implies \\\\mathcal{O}(n \\\\log n)$ in all cases; Stable, requires $\\\\mathcal{O}(n)$ auxiliary memory.",
        "Heap Sort Algorithm: Constructs max-heap in $\\\\mathcal{O}(n)$ time; Repeatedly swaps root with last element and calls `heapify` on reduced heap in $\\\\mathcal{O}(\\\\log n)$ time; Total time $\\\\mathcal{O}(n \\\\log n)$ in-place.",
        "Stability of Sorting Algorithms: A sort is stable if it preserves the relative order of elements with equal keys; Stable: Merge sort, Insertion sort, Bubble sort; Unstable: Quicksort, Heap sort, Selection sort.",
        "Comparison Sort Bound: Any comparison-based sorting algorithm requires at least $\\\\Omega(n \\\\log n)$ comparisons in the worst case (decision tree model height $\\\\log_2(n!) \\\\ge n \\\\log_2 n - n \\\\log_2 e$)."
    ],
    [
        "Binary Search Mid Formula: $mid = low + \\\\frac{high - low}{2}$ avoids integer arithmetic overflow.",
        "Binary Search Complexity: $\\\\mathcal{O}(\\\\log n)$ worst case, requires sorted contiguous storage.",
        "Bubble Sort Optimization: Terminate early if inner loop executes zero swaps.",
        "Insertion Sort Best Case: $\\\\mathcal{O}(n)$ comparisons on pre-sorted array.",
        "Selection Sort Swap Count: Minimizes memory writes with at most $\\\\mathcal{O}(n)$ swaps.",
        "Merge Sort Time and Space: Always $\\\\mathcal{O}(n \\\\log n)$ time; requires $\\\\mathcal{O}(n)$ auxiliary space.",
        "Quicksort Worst Case: Occurs when input is sorted and first/last element is picked as pivot ($\\\\mathcal{O}(n^2)$).",
        "Heap Sort In-Place: Operates in $\\\\mathcal{O}(n \\\\log n)$ time using $\\\\mathcal{O}(1)$ auxiliary space.",
        "Stable Sort Definition: Preserves original relative order of duplicate key records.",
        "Exam Tip: Quicksort is fastest in practice due to excellent cache locality, but Merge sort is preferred for linked lists."
    ]
)

add_unit(
    "bsc-dsc: hashing",
    [
        "Hash Table Concept & Direct Addressing: Direct address table maps universe of keys $U$ directly to indices; Impractical when $|U| \\\\gg m$; Hash function $h: U \\\\to \\\\{0, 1, \\\\dots, m-1\\\\}$ compresses keys into bounded array slots.",
        "Division Method for Hashing: $h(k) = k \\\\pmod m$; Choice of modulus $m$: prime number not close to powers of 2 or 10 to avoid biased clustering based on low-order bit patterns.",
        "Multiplication Method: $h(k) = \\\\lfloor m (k A \\\\pmod 1) \\\\rfloor$ where $0 < A < 1$; Knuth recommends golden ratio fractional conjugate $A = \\\\frac{\\\\sqrt{5}-1}{2} \\\\approx 0.6180339887$; Value of $m$ typically chosen as power of 2 ($m = 2^p$).",
        "Collision Phenomenon: Pigeonhole principle guarantees that collisions ($h(k_1) = h(k_2)$ for $k_1 \\\\ne k_2$) are inevitable when number of keys exceeds table capacity $m$.",
        "Collision Resolution by Separate Chaining: Each table slot contains pointer to head of linked list storing colliding keys; Load factor $\\\\alpha = n/m$; Average search time $\\\\mathcal{O}(1 + \\\\alpha)$; Worst-case $\\\\mathcal{O}(n)$ when all keys hash to single slot.",
        "Open Addressing (Closed Hashing): All elements stored directly inside table array ($n \\\\le m$); On collision, systematic probe sequence $h(k, i)$ is inspected until empty slot found.",
        "Linear Probing: Probe function $h(k, i) = (h'(k) + i) \\\\pmod m$ for probe step $i = 0, 1, \\\\dots, m-1$; Suffers from Primary Clustering (consecutive occupied slots merge into large blocks, increasing average probe length).",
        "Quadratic Probing: Probe function $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\\\pmod m$; Eliminates primary clustering but suffers from Secondary Clustering (keys hashing to identical initial slot follow identical probe paths).",
        "Double Hashing: Probe function $h(k, i) = (h_1(k) + i \\\\cdot h_2(k)) \\\\pmod m$; Employs two independent hash functions; Eliminates both primary and secondary clustering; $h_2(k)$ must be relatively prime to $m$.",
        "Rehashing & Dynamic Resizing: When load factor $\\\\alpha = n/m$ exceeds threshold (typically $\\\\alpha > 0.75$), allocate new table with $m' \\\\approx 2m$, recompute hash addresses for all existing keys, and free old table array."
    ],
    [
        "Load Factor Definition: $\\\\alpha = \\\\frac{n}{m}$ (number of items $n$ divided by table slots $m$).",
        "Division Hash Formula: $h(k) = k \\\\pmod m$ (prefer prime $m$).",
        "Knuth Multiplication Constant: $A = (\\\\sqrt{5} - 1)/2 \\\\approx 0.6180339887$.",
        "Linear Probing Formula: $h(k, i) = (h'(k) + i) \\\\pmod m$.",
        "Double Hashing Formula: $h(k, i) = (h_1(k) + i \\\\cdot h_2(k)) \\\\pmod m$.",
        "Primary Clustering Cause: Long runs of occupied slots created by linear step increments.",
        "Separate Chaining Advantage: Can handle load factors $\\\\alpha > 1$ without table failure.",
        "Open Addressing Constraint: Strictly requires $\\\\alpha \\\\le 1$; degrades sharply when $\\\\alpha > 0.8$.",
        "Successful Search in Chaining: Average time is $1 + \\\\alpha / 2$ probe operations.",
        "Exam Tip: In open addressing deletion, never leave a deleted slot empty (`NULL`); mark it as `DELETED` so subsequent probe chains are not broken."
    ]
)
'''

content += part3

with open("scripts/build_bsc_sem2_math_cs.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subject 5 (Data Structures using C).")
