# TODO: complete this class
# https://www.codewars.com/kata/515bb423de843ea99400000a/train/python

class PaginationHelper:

  # The constructor takes in an array of items and a integer indicating
  # how many items fit within a single page
  def __init__(self, collection, items_per_page):
    self.collection = collection
    self.items_per_page = items_per_page
    self.page_count_num = len(collection) // items_per_page
    if len(collection) % items_per_page != 0:
      self.page_count_num += 1
    self.page_index_num = -1
  
  # returns the number of items within the entire collection
  def item_count(self):
    return len(self.collection)
      
  
  # returns the number of pages
  def page_count(self):
    return self.page_count_num
	
  # returns the number of items on the current page. page_index is zero based
  # this method should return -1 for page_index values that are out of range
  def page_item_count(self,page_index):
    if page_index < 0 or page_index >= self.page_count_num:
      return -1
    if page_index == self.page_index:
      return len(self.collection) % self.items_per_page
    return self.items_per_page
  
  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(self,item_index):
    if item_index < 0 or item_index >= len(self.collection):
      return -1
    self.page_index_num = item_index // self.items_per_page
    return self.page_index_num
      
  