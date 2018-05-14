from turtle import *
import random
import math
# c1 = '#0971B2'
# c2 = '#1485CC'

bgcolor('black')
shape('arrow')
speed(10)
down()

colors = [
  '#52067F',
  '#C058FF',
  '#A30CFF',
  '#673F7F',
  '#830ACC'
]

def draw_square(side, p_color):
  pencolor(p_color)
  for i in range(4):
    forward(side)
    left(90)

def draw_circle(p_width, c_width, p_color, f_color):
  # begin_fill()
  # fillcolor(f_color)
  pencolor(p_color)
  width(p_width)
  circle(c_width)
  # end_fill()

def main():
  input()
  while True:
    draw_square(random.randint(1, 300), random.choice(colors))
    left(random.randint(1, 360))
    # speed(random.randint(0, 10))
main()