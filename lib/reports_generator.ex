defmodule ReportsGenerator do
  def build(filename) do
    file = File.read("lib/reports/#{filename}.csv")
  end
end
