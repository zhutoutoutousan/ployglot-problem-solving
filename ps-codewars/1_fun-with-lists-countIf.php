<!-- function count_if($head, $p) {
  return 0;
} -->

<!-- $p as linked list
class Node {
  public $data, $next;
  public function __construct($data, $next = NULL) {
    $this->data = $data;
    $this->next = $next;
  }
}
 -->

<!-- Function comes here -->
<?php
function count_if($head, $p) {
  $count = 0;
  while ($head) {
    if ($p($head->data)) {
      $count++;
    }
    $head = $head->next;
  }
  return $count;
}
?>