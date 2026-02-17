
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-02-16 18:00:00", "b": 3956.8}, {"a": "2026-02-16 18:05:00", "b": 4020.2}, {"a": "2026-02-16 18:10:00", "b": 3864.4}, {"a": "2026-02-16 18:15:00", "b": 3764.4}, {"a": "2026-02-16 18:20:00", "b": 3842.0}, {"a": "2026-02-16 18:25:00", "b": 3837.6}, {"a": "2026-02-16 18:30:00", "b": 3953.4}, {"a": "2026-02-16 18:35:00", "b": 3704.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    