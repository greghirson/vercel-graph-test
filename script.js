
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-08 09:00:00", "b": 562.25}, {"a": "2025-02-08 09:05:00", "b": 597.8}, {"a": "2025-02-08 09:10:00", "b": 640.6}, {"a": "2025-02-08 09:15:00", "b": 668.6}, {"a": "2025-02-08 09:20:00", "b": 677.0}, {"a": "2025-02-08 09:25:00", "b": 652.0}, {"a": "2025-02-08 09:30:00", "b": 653.8}, {"a": "2025-02-08 09:35:00", "b": 689.0}, {"a": "2025-02-08 09:40:00", "b": 694.75}, {"a": "2025-02-08 09:45:00", "b": 721.6}, {"a": "2025-02-08 09:50:00", "b": 743.0}, {"a": "2025-02-08 09:55:00", "b": 732.75}, {"a": "2025-02-08 10:00:00", "b": 725.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    