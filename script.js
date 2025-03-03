
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-02 20:15:00", "b": 596.3333333333334}, {"a": "2025-03-02 20:20:00", "b": 840.2}, {"a": "2025-03-02 20:25:00", "b": 818.2}, {"a": "2025-03-02 20:30:00", "b": 827.0}, {"a": "2025-03-02 20:35:00", "b": 840.25}, {"a": "2025-03-02 20:40:00", "b": 840.8}, {"a": "2025-03-02 20:45:00", "b": 827.4}, {"a": "2025-03-02 20:50:00", "b": 809.5}, {"a": "2025-03-02 20:55:00", "b": 798.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    