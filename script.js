
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-02 05:30:00", "b": 451.5}, {"a": "2024-11-02 05:35:00", "b": 460.5}, {"a": "2024-11-02 05:40:00", "b": 467.0}, {"a": "2024-11-02 05:45:00", "b": 459.75}, {"a": "2024-11-02 05:50:00", "b": 459.4}, {"a": "2024-11-02 05:55:00", "b": 467.6}, {"a": "2024-11-02 06:00:00", "b": 456.2}, {"a": "2024-11-02 06:05:00", "b": 465.0}, {"a": "2024-11-02 06:10:00", "b": 459.0}, {"a": "2024-11-02 06:15:00", "b": 456.2}, {"a": "2024-11-02 06:20:00", "b": 456.8}, {"a": "2024-11-02 06:25:00", "b": 449.6}, {"a": "2024-11-02 06:30:00", "b": 447.6}, {"a": "2024-11-02 06:35:00", "b": 444.5}, {"a": "2024-11-02 06:40:00", "b": 447.0}, {"a": "2024-11-02 06:45:00", "b": 449.25}, {"a": "2024-11-02 06:50:00", "b": 442.8}, {"a": "2024-11-02 06:55:00", "b": 439.2}, {"a": "2024-11-02 07:00:00", "b": 437.4}, {"a": "2024-11-02 07:05:00", "b": 432.4}, {"a": "2024-11-02 07:10:00", "b": 423.8}, {"a": "2024-11-02 07:15:00", "b": 423.2}, {"a": "2024-11-02 07:20:00", "b": 435.6}, {"a": "2024-11-02 07:25:00", "b": 424.8}, {"a": "2024-11-02 07:30:00", "b": 440.2}, {"a": "2024-11-02 07:35:00", "b": 454.8}, {"a": "2024-11-02 07:40:00", "b": 447.4}, {"a": "2024-11-02 07:45:00", "b": 447.5}, {"a": "2024-11-02 07:50:00", "b": 443.5}, {"a": "2024-11-02 07:55:00", "b": 456.0}, {"a": "2024-11-02 08:00:00", "b": 449.2}, {"a": "2024-11-02 08:05:00", "b": 445.0}, {"a": "2024-11-02 08:10:00", "b": 452.8}, {"a": "2024-11-02 08:15:00", "b": 464.25}, {"a": "2024-11-02 08:20:00", "b": 454.75}, {"a": "2024-11-02 08:25:00", "b": 448.6}, {"a": "2024-11-02 08:30:00", "b": 443.4}, {"a": "2024-11-02 08:35:00", "b": 437.2}, {"a": "2024-11-02 08:40:00", "b": 449.25}, {"a": "2024-11-02 08:45:00", "b": 456.6666666666667}, {"a": "2024-11-02 08:50:00", "b": 455.6}, {"a": "2024-11-02 08:55:00", "b": 460.75}, {"a": "2024-11-02 09:00:00", "b": 452.75}, {"a": "2024-11-02 09:05:00", "b": 461.8}, {"a": "2024-11-02 09:10:00", "b": 466.75}, {"a": "2024-11-02 09:15:00", "b": 456.25}, {"a": "2024-11-02 09:20:00", "b": 468.6}, {"a": "2024-11-02 09:25:00", "b": 479.8}, {"a": "2024-11-02 09:30:00", "b": 467.25}, {"a": "2024-11-02 09:35:00", "b": 473.6}, {"a": "2024-11-02 09:40:00", "b": 467.8}, {"a": "2024-11-02 09:45:00", "b": 461.8}, {"a": "2024-11-02 09:50:00", "b": 466.8}, {"a": "2024-11-02 09:55:00", "b": 481.0}, {"a": "2024-11-02 10:00:00", "b": 468.2}, {"a": "2024-11-02 10:05:00", "b": 452.2}, {"a": "2024-11-02 10:10:00", "b": 474.0}, {"a": "2024-11-02 10:15:00", "b": 482.6}, {"a": "2024-11-02 10:20:00", "b": 474.4}, {"a": "2024-11-02 10:25:00", "b": 481.0}, {"a": "2024-11-02 10:30:00", "b": 471.3333333333333}, {"a": "2024-11-02 10:35:00", "b": 471.6666666666667}, {"a": "2024-11-02 10:40:00", "b": 466.25}, {"a": "2024-11-02 10:45:00", "b": 473.4}, {"a": "2024-11-02 10:50:00", "b": 465.2}, {"a": "2024-11-02 10:55:00", "b": 455.8}, {"a": "2024-11-02 11:00:00", "b": 451.25}, {"a": "2024-11-02 11:05:00", "b": 457.8}, {"a": "2024-11-02 11:10:00", "b": 452.0}, {"a": "2024-11-02 11:15:00", "b": 461.4}, {"a": "2024-11-02 11:20:00", "b": 459.2}, {"a": "2024-11-02 11:25:00", "b": 466.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    