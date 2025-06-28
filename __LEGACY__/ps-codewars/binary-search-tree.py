# https://www.codewars.com/kata/571a551a196bb0567f000603/train/python
class Tree(object):
    # "[_ B [C]]"
    def __init__(self, root, left=None, right=None):
        assert root and type(root) == Node
        if left: assert type(left) == Tree and left.root < root
        if right: assert type(right) == Tree and root < right.root

        self.left = left
        self.root = root
        self.right = right
        
    def is_leaf(self):
        return not(self.left or self.right)
        
    # Sample return format [[A] B [C]]
    def __str__(self):
        if self.is_leaf():
            return '['+str(self.root)+']'
        else:
            # If a node is a leaf, wrap it with square bracket, if not, there's no bracket if subtree is missing, use '_'
            if self.left:
                left = str(self.left)
            else:
                left = '_'
            if self.right:
                right = str(self.right)
            else:
                right = '_'
            if self.is_leaf():
                return '['+str(self.root)+']'



            
        
    
    def __eq__(self, other):
        # Check if two trees are equal
        def is_equal(self, other):
            if not self and not other:
                return True
            if not self or not other:
                return False
            if self.root != other.root:
                return False
            return is_equal(self.left, other.left) and is_equal(self.right, other.right)
        return is_equal(self, other)
    
    def __ne__(self, other):
        return not self.__eq__(other)
        
class Node(object):
    
    def __init__(self, value, weight=1):
        self.value = value
        self.weight = weight
    
    def __str__(self):
        return str(self.value)   
    
    def __lt__(self, other):
        return self.value < other.value
    
    def __gt__(self, other):
        return self.value > other.value
    
    def __eq__(self, other):
        return self.value == other.value 

    def __ne__(self, other):
        return self.value != other.value 
