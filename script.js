
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-17 19:00:00", "b": 535.25}, {"a": "2024-11-17 19:05:00", "b": 532.0}, {"a": "2024-11-17 19:10:00", "b": 529.2}, {"a": "2024-11-17 19:15:00", "b": 548.2}, {"a": "2024-11-17 19:20:00", "b": 563.6}, {"a": "2024-11-17 19:25:00", "b": 564.8}, {"a": "2024-11-17 19:30:00", "b": 555.75}, {"a": "2024-11-17 19:35:00", "b": 559.2}, {"a": "2024-11-17 19:40:00", "b": 603.0}, {"a": "2024-11-17 19:45:00", "b": 625.6}, {"a": "2024-11-17 19:50:00", "b": 632.2}, {"a": "2024-11-17 19:55:00", "b": 626.0}, {"a": "2024-11-17 20:00:00", "b": 642.5}, {"a": "2024-11-17 20:05:00", "b": 689.0}, {"a": "2024-11-17 20:10:00", "b": 698.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    